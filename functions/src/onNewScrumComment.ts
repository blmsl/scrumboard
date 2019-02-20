import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const onNewScrumComments = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}/comments/{commentId}')
    .onCreate(async (snap, context) => {
        const firestore = admin.firestore();
        const comment = snap.data();
        const promises = [];
        // Update commentsCount aggregated value
        const scrumRef = snap.ref.parent.parent;
        const data = (await scrumRef.get()).data();
        if (data.commentsCount) {
            promises.push(scrumRef.update({
                commentsCount: data.commentsCount + 1
            }));
        } else {
            promises.push(scrumRef.update({
                commentsCount: 1
            }));
        }
        // Send notifcation to all users
        const team = (await firestore.doc('teams/' + context.params.teamId).get()).data();
        Object.keys(team.members).forEach(uid => {
            promises.push(firestore.collection('users/' + uid + '/notifications').add({
                title: 'New comment!',
                txt: comment.username + ": " + comment.txt
            }));
        });
        return Promise.all(promises);
    });

export const onDeletedScrumComments = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}/comments/{commentId}')
    .onDelete(async (snap, context) => {
        // Update commentsCount aggregated value
        const scrumRef = snap.ref.parent.parent;
        const data = (await scrumRef.get()).data();
        return scrumRef.update({
            commentsCount: data.commentsCount - 1
        });
    });
