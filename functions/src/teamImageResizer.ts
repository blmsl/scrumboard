import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const gcs = require('@google-cloud/storage')();

import { tmpdir } from 'os';
import { join, dirname } from 'path';

import * as sharp from 'sharp';
import * as fs from 'fs-extra';

export const teamImageResizer = functions.storage
    .object()
    .onFinalize(async object => {
        const bucket = gcs.bucket(object.bucket);
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
        const data = await bucket.upload(thumbPath, {
            destination: join(bucketDir, thumbName)
        });

        console.log('Uploading complete');

        // Deleting old file
        await bucket.file(filePath).delete();
        console.log('Deleted old img');

        // 5. Cleanup remove the tmp/thumbs from the filesystem
        await fs.remove(workingDir);

        const url = await bucket.file(thumbPath).getSignedUrl();
        console.log('url:', url);

        console.log('teams/' + fileName.split('.')[0]);
        return firestore.doc('teams/' + fileName.split('.')[0]).update({
            imgURL: url
        });
        // TODO: upload the img URL to the team doc
    });