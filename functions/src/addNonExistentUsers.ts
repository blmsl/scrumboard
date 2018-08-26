import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const addNonExistentUsers = functions.https.onCall(async (data, context) => {

    const fs = admin.firestore();

    const codeToDelete = data.code;

    const uid = data.uid;
    const teamId = data.teamId;

    const imgUrl = data.imgUrl;
    const name = data.name;

    // Delete the code entry from the codes collection to prevent multiple users join the team with same link
    const snap = await fs.collection('teams/' + teamId + '/codes').where('code', '==', codeToDelete).get()
    snap.forEach(async doc => {
        const docData = doc.data();
        // If the user has a valid code
        if (docData.code === codeToDelete) {
            await doc.ref.delete();
            // Add the user to the team
            const teamDoc = await admin.firestore().doc(`teams/${teamId}`).get();
            const members = teamDoc.data().members;
            members[uid] = { 
                isMember: true,
                imgUrl,
                name
            };
            console.log('Adding new member to the team', members[uid]);
            return admin.firestore().doc(`teams/${teamId}`).update({
                members: members
            });
        } else {
            return null;
        }
    });



});
