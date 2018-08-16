import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const deleteEmptyTeams = functions.firestore
    .document('teams/{teamId}')
    .onUpdate((change, context) => {
        const newData = change.after.data();
        const teamId = context.params.teamId;

        if (Object.keys(newData.members).length === 0 && newData.members.constructor === Object) {
            // No more members... delete team
            return admin.firestore().doc(`teams/${teamId}`).delete();
        } else {
            return null;
        }
    });

