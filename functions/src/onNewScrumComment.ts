import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const onNewScrumComments = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}/comments/{commentId}')
    .onCreate((snap, context) => {
        const firestore = admin.firestore();
        const comment = snap.data();
        const promises = [];
        // Update commentsCount aggregated value
        const scrumRef = snap.ref.parent.parent;
        scrumRef.get().then(scrumSnap => {
            const data = scrumSnap.data();
            if (data.commentsCount) {
                promises.push(scrumRef.update({
                    commentsCount: data.commentsCount + 1
                }));
            } else {
                promises.push(scrumRef.update({
                    commentsCount: 1
                }));
            }
        });
        // Send notifcation to all users except sending comment
        firestore.doc('teams/' + context.params.teamId).get().then(teamSnap => {
            const team = teamSnap.data();
            Object.keys(team.members).forEach(uid => {
                if (comment.uid !== uid) {
                    promises.push(firestore.collection('users/' + uid + '/notifications').add({
                        title: 'New comment!',
                        txt: comment.username + ": " + comment.txt,
                        link: 'https://scrumboard.io/scrum/' + context.params.teamId + '/' + context.params.boardId + '?e=' + context.params.entryId
                    }));
                }
            });
        })
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
