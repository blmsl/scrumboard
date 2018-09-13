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
exports.getUserByMail = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    const mail = data.mail;
    const teamId = data.teamId;
    console.log('retrieving user with mail:', mail, teamId);
    // get the user info and teamInfo
    try {
        console.time('time');
        const combinedData = yield Promise.all([
            admin.auth().getUserByEmail(mail),
            admin.firestore().doc(`teams/${teamId}`).get()
        ]);
        console.timeEnd('time');
        const userData = combinedData[0];
        const team = combinedData[1].data();
        console.log({ team });
        console.log('uid', userData.uid);
        if (!team.members.hasOwnProperty(userData.uid)) { // user is not member of the team
            return { userData };
        }
        else {
            console.log('User is already member', userData);
            throw new functions.https.HttpsError('already-exists', 'This user is already member of the team');
        }
    }
    catch (err) { // If the user is not found or another error has occured
        switch (err.code) {
            case 'auth/user-not-found':
                throw new functions.https.HttpsError('not-found', 'We could not find any user by this email. Please try another email, or send an invitation.');
            case 'already-exists':
                throw new functions.https.HttpsError('already-exists', 'This user is already member of the team');
            default:
                throw new functions.https.HttpsError('aborted', 'An error has occured, please try again later');
        }
    }
}));
//# sourceMappingURL=getUserByMail.js.map