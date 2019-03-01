import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const grabity = require("grabity");

const fs = admin.firestore();

export const onEntryCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}')
    .onCreate(async (snap, context) => {
        return Promise.all([
            update(context.params.teamId, context.params.boardId, { add: snap.data().state, delete: false }),
            createLinkPreview(snap.data().link, snap.ref)
        ]);
    });

export const onEntryDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}')
    .onDelete(async (snap, context) =>
        update(context.params.teamId, context.params.boardId, { add: false, delete: snap.data().state }));

export const onEntryUpdated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}')
    .onUpdate(async (change, context) => {
        const before = change.before.data()
        const after = change.after.data();

        if (before.state === after.state) return false;

        return update(context.params.teamId, context.params.boardId,
            { delete: before.state, add: after.state });
    });

async function update(teamId: string, boardId: string, stateChange?: stateChangeInterface) {
    const boardDoc = (await fs.doc('teams/' + teamId + '/boards/' + boardId).get()).data();
    let aggregatedData = boardDoc.aggregatedData;
    if (!aggregatedData) {
        aggregatedData = { todo: 0, inProgress: 0, done: 0 };
    }
    if (stateChange.add) {
        aggregatedData[stateChange.add]++;
    }
    if (stateChange.delete) {
        aggregatedData[stateChange.delete]--;
    }
    return fs.doc('teams/' + teamId + '/boards/' + boardId).update({ aggregatedData });
}

async function createLinkPreview(link: string, ref: FirebaseFirestore.DocumentReference): Promise<any> {
    if (link) {
        const response = await grabity.grabIt(link);
        return ref.update({link: response})
    }
    else return Promise.resolve();
}

interface stateChangeInterface {
    add: 'todo' | 'inProgress' | 'done' | false;
    delete: 'todo' | 'inProgress' | 'done' | false;
}
