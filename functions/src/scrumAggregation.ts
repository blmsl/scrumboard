import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const fs = admin.firestore();

export const onTodoCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/todo/{entryId}')
    .onCreate(async (snap, context) => update(context.params.teamId, context.params.boardId, 'todo', true));

export const onTodoDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/todo/{entryId}')
    .onCreate(async (snap, context) => update(context.params.teamId, context.params.boardId, 'todo', false));

export const onInProgressCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/inProgress/{entryId}')
    .onCreate(async (snap, context) => update(context.params.teamId, context.params.boardId, 'inProgress', true));

export const onInProgressDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/inProgress/{entryId}')
    .onCreate(async (snap, context) => update(context.params.teamId, context.params.boardId, 'inProgress', false));

export const onDoneCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/done/{entryId}')
    .onCreate(async (snap, context) => update(context.params.teamId, context.params.boardId, 'done', true));

export const onDoneDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/done/{entryId}')
    .onCreate(async (snap, context) => update(context.params.teamId, context.params.boardId, 'done', false));

async function update(teamId: string, boardId: string, subcollection: string, increment: boolean) {
    console.log({ teamId, boardId, subcollection, increment });

    const snap = await fs.doc('teams/' + teamId + '/boards/' + boardId).get();
    const boardDoc = snap.data();
    let aggregatedData = boardDoc.aggregatedData;
    if (aggregatedData) {
        if (increment) aggregatedData[subcollection]++;
        else aggregatedData[subcollection]--;
        
    } else {
        aggregatedData = {todo: 0, inProgress: 0, done: 0};
    };
    return fs.doc('teams/' + teamId + '/boards/' + boardId).update({aggregatedData});
}
