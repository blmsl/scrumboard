import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const createAdmin = functions.https.onCall((data, context) => {
    const uid = data.uid;
    const clientUID = context.auth.uid;

    admin.auth().getUser(clientUID).then((userRecord) => {
        if ((<customClaimsInterface>userRecord.customClaims).admin) {
            // Client is admin
            return admin.auth().setCustomUserClaims(uid, {
                admin: true
            }).then(() => {
                console.log(uid + ' is now admin');
            }).catch(err => {
                throw new functions.https.HttpsError('aborted', 'An error has occured, please try again later');
            });

        } else {
            // Client is not admin
            throw new functions.https.HttpsError('permission-denied', 'You must be an admin to promote other users to admin.');
        }
    });
});

interface customClaimsInterface {
    admin: boolean;
}
