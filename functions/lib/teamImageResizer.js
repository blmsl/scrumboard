"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const os_1 = require("os");
const path_1 = require("path");
const sharp = require("sharp");
const fs = require("fs-extra");
// Resizing the image and uploading it to storage,
// then adding the location of the file to team doc.
// Have to save the location, not the download url, because then there is no security
exports.teamImageResizer = functions.storage
    .object()
    .onFinalize((object) => __awaiter(this, void 0, void 0, function* () {
    try {
        const bucket = admin.storage().bucket();
        const filePath = object.name;
        const fileName = filePath.split('/').pop();
        const bucketDir = path_1.dirname(filePath);
        const firestore = admin.firestore();
        const workingDir = path_1.join(os_1.tmpdir(), 'thumbs');
        const tmpFilePath = path_1.join(workingDir, 'source.png');
        if (fileName.includes('@') || !object.contentType.includes('image')) {
            console.log('exiting function');
            return false;
        }
        // 1. Ensure thumbnail dir exists
        yield fs.ensureDir(workingDir);
        // 2. Download Source File
        yield bucket.file(filePath).download({
            destination: tmpFilePath
        });
        // 3. Resize the images and define an array of upload promises
        const size = 100;
        const thumbName = `@${fileName}`;
        const thumbPath = path_1.join(workingDir, thumbName);
        // Resize source image
        yield sharp(tmpFilePath)
            .resize(size, size)
            .toFile(thumbPath);
        // Upload to GCS
        yield bucket.upload(thumbPath, {
            destination: path_1.join(bucketDir, thumbName),
            // Used to cache the images
            metadata: {
                cacheControl: 'public,max-age=3600',
                contentType: 'image/jpeg'
            }
        });
        console.log('Uploading complete');
        // Deleting old file
        yield bucket.file(filePath).delete();
        console.log('Deleted old img');
        // uploading the location of the file to the team doc      
        console.log('teams/' + fileName.split('.')[0]);
        yield firestore.doc('teams/' + fileName.split('.')[0]).update({
            imgRef: thumbName
        });
        // 5. Cleanup remove the tmp/thumbs from the filesystem
        console.log('Trying to delete img', { workingDir, tmpFilePath });
        return fs.remove(tmpFilePath);
    }
    catch (err) {
        console.error(err);
        return false;
    }
}));
//# sourceMappingURL=teamImageResizer.js.map