import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { tmpdir } from 'os';
import { join, dirname } from 'path';

import * as sharp from 'sharp';
import * as fs from 'fs-extra';

// Resizing the image and uploading it to storage,
// then adding the location of the file to team doc.
// Have to save the location, not the download url, because then there is no security

export const teamImageResizer = functions.storage
    .object()
    .onFinalize(async object => {
        try {
            const bucket = admin.storage().bucket();
            const filePath = object.name;
            const fileName = filePath.split('/').pop();
            const bucketDir = dirname(filePath);

            const firestore = admin.firestore();

            const workingDir = join(tmpdir(), 'thumbs');
            const tmpFilePath = join(workingDir, 'source.png');

            if (fileName.includes('@') || !object.contentType.includes('image')) {
                console.log('exiting function');
                return false;
            }

            // 1. Ensure thumbnail dir exists
            await fs.ensureDir(workingDir);

            // 2. Download Source File
            await bucket.file(filePath).download({
                destination: tmpFilePath
            });

            // 3. Resize the images and define an array of upload promises
            const size = 100;

            const thumbName = `@${fileName}`;
            const thumbPath = join(workingDir, thumbName);

            // Resize source image
            await sharp(tmpFilePath)
                .resize(size, size)
                .toFile(thumbPath);

            // Upload to GCS
            await bucket.upload(thumbPath, {
                destination: join(bucketDir, thumbName),
                // Used to cache the images
                metadata: {
                    cacheControl: 'public,max-age=3600',
                    contentType: 'image/jpeg'
                }
            });

            console.log('Uploading complete');

            // Deleting old file
            await bucket.file(filePath).delete();
            console.log('Deleted old img');

            // uploading the location of the file to the team doc      
            console.log('teams/' + fileName.split('.')[0]);
            await firestore.doc('teams/' + fileName.split('.')[0]).update({
                imgRef: thumbName
            });

            // 5. Cleanup remove the tmp/thumbs from the filesystem
            console.log('Trying to delete img', { workingDir, tmpFilePath })
            return fs.remove(tmpFilePath);

        } catch (err) {
            console.error(err);
            return false;
        }
    });