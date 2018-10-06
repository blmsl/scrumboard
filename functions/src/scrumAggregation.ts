import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const fs = admin.firestore();

export const onTodoCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/todo/{entryId}')
    .onCreate(async (snap, context) => update(context, 'todo', true));

export const onTodoDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/todo/{entryId}')
    .onCreate(async (snap, context) => update(context, 'todo', false));

export const onInProgressCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/inProgress/{entryId}')
    .onCreate(async (snap, context) => update(context, 'inProgress', true));

export const onInProgressDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/inProgress/{entryId}')
    .onCreate(async (snap, context) => update(context, 'inProgress', false));

export const onDoneCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/done/{entryId}')
    .onCreate(async (snap, context) => update(context, 'done', true));

export const onDoneDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/done/{entryId}')
    .onCreate(async (snap, context) => update(context, 'done', false));

async function update(context: functions.EventContext, subcollection: string, increment: boolean) {
    const teamId = context.params.teamdId;
    const boardId = context.params.boardId;

    const boardDoc = (await fs.doc('teams/' + teamId + '/boards/' + boardId).get()).data();
    const aggregatedData = boardDoc.aggregatedData;
    if (increment) aggregatedData[subcollection]++;
    else aggregatedData[subcollection]--;
    return fs.doc('teams/' + teamId + '/boards/' + boardId).update(aggregatedData);
}
