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
const gcs = require('@google-cloud/storage')();
const os_1 = require("os");
const path_1 = require("path");
const sharp = require("sharp");
const fs = require("fs-extra");
exports.teamImageResizer = functions.storage
    .object()
    .onFinalize((object) => __awaiter(this, void 0, void 0, function* () {
    const bucket = gcs.bucket(object.bucket);
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
    const data = yield bucket.upload(thumbPath, {
        destination: path_1.join(bucketDir, thumbName)
    });
    console.log('Uploading complete');
    // Deleting old file
    yield bucket.file(filePath).delete();
    console.log('Deleted old img');
    // 5. Cleanup remove the tmp/thumbs from the filesystem
    yield fs.remove(workingDir);
    const url = yield bucket.file(thumbPath).getSignedUrl();
    console.log('url:', url);
    console.log('teams/' + fileName.split('.')[0]);
    return firestore.doc('teams/' + fileName.split('.')[0]).update({
        imgURL: url
    });
    // TODO: upload the img URL to the team doc
}));
//# sourceMappingURL=teamImageResizer.js.map