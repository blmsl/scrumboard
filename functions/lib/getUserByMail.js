"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.getUserByMail = functions.https.onCall((data, context) => {
    const mail = data.mail;
    const teamId = data.teamId;
    // get the user info and teamInfo
    return Promise.all([
        admin.auth().getUserByEmail(mail),
        admin.firestore().doc(`teams/${teamId}`).get()
    ]).then(function (combinedData) {
        const userData = combinedData[0];
        const team = combinedData[1].data();
        console.log('user is already apart of team:', team.members[userData.uid].isMember);
        if (team.members[userData.uid].isMember) { // user is already member of the team
            console.log('User is already member', userData);
            throw new functions.https.HttpsError('already-exists', 'This user is already member of the team');
        }
        console.log('user is not already memebr');
        return {
            userData: userData
        };
    }).catch(err => {
        switch (err.code) {
            case 'auth/user-not-found':
                throw new functions.https.HttpsError('not-found', 'We could not find any user with this email');
            default:
                throw new functions.https.HttpsError('aborted', 'An error has occured, please try again later');
        }
    });
});
//# sourceMappingURL=getUserByMail.js.map