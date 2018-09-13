import * as functions from 'firebase-functions';
import { deleteSubcollections } from './shared/deleteSubcollections';

// When a user deltes the scrum document => delete all subcollections

export const deleteScrum = functions.firestore
    .document('teams/{teamId}/boards/{boardId}')
    .onDelete(async (snap, context) => {
        
        const ref = snap.ref;

        return deleteSubcollections(ref, ['todo', 'inProgress', 'done']);

    });


