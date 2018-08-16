import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const getUserByMail = functions.https.onCall(async (data, context) => {
    const mail = data.mail;
    const teamId = data.teamId;
    console.log('retrieving user with mail:', mail, teamId);
    // get the user info and teamInfo
    try {
        const combinedData = await Promise.all([
            admin.auth().getUserByEmail(mail),
            admin.firestore().doc(`teams/${teamId}`).get()
        ]);

        const userData = combinedData[0];
        const team = <TeamsInterface>combinedData[1].data();
        console.log({ team });
        console.log('uid', userData.uid);

        if (!team.members.hasOwnProperty(userData.uid)) { // user is not member of the team
            return { userData };
        } else {
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

});
interface TeamsInterface {
    name: string;
    members: Object;
    id?: string;
}
