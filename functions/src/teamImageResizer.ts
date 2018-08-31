import * as functions from 'firebase-functions';

import * as Storage from '@google-cloud/storage';
const gcs = new Storage();

import { tmpdir } from 'os';
import { join, dirname } from 'path';

import * as sharp from 'sharp';
import * as fs from 'fs-extra';

export const generateThumbs = functions.storage
    .object()
    .onFinalize(async object => {
        const bucket = gcs.bucket(object.bucket);
        const filePath = object.name;
        const fileName = filePath.split('/').pop();
        const bucketDir = dirname(filePath);

        const workingDir = join(tmpdir(), 'thumbs');
        const tmpFilePath = join(workingDir, 'source.png');

        if (fileName.includes('thumb@') || !object.contentType.includes('image')) {
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

        const thumbName = `thumb@${fileName}`;
        const thumbPath = join(workingDir, thumbName);

        // Resize source image
        await sharp(tmpFilePath)
            .resize(size, size)
            .toFile(thumbPath);

        // Upload to GCS
        const data = await bucket.upload(thumbPath, {
            destination: join(bucketDir, thumbName)
        });

        console.log(await data[0].getSignedUrl);

        // 5. Cleanup remove the tmp/thumbs from the filesystem
        return fs.remove(workingDir);

        // TODO: upload the img URL to the team doc
    });