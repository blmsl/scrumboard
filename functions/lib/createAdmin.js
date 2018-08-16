"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.createAdmin = functions.https.onCall((data, context) => {
    const uid = data.uid;
    const clientUID = context.auth.uid;
    admin.auth().getUser(clientUID).then((userRecord) => {
        if (userRecord.customClaims.admin) {
            // Client is admin
            return admin.auth().setCustomUserClaims(uid, {
                admin: true
            }).then(() => {
                console.log(uid + ' is now admin');
            }).catch(err => {
                throw new functions.https.HttpsError('aborted', 'An error has occured, please try again later');
            });
        }
        else {
            // Client is not admin
            throw new functions.https.HttpsError('permission-denied', 'You must be an admin to promote other users to admin.');
        }
    });
});
//# sourceMappingURL=createAdmin.js.map