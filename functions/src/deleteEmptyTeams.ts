import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { deleteSubcollections } from './shared/deleteSubcollections';

const fs = admin.firestore();

export const deleteEmptyTeams = functions.firestore
    .document('teams/{teamId}')
    .onUpdate(async (change, context) => {


        const newData = change.after.data();
        const teamId = context.params.teamId;

        if (Object.keys(newData.members).length === 0 && newData.members.constructor === Object) {
            // No more members... delete team
            const teamRef = fs.doc(`teams/${teamId}`);
            const boardsRef = teamRef.collection('boards');

            // Delete all boards with subcollections: todo, inprogress, done
            const boards = await boardsRef.get()
            await boards.forEach(async doc => {
                await deleteSubcollections(boardsRef.doc(doc.id), ['todo', 'inProgress', 'done']);
                // Delte scrum document
                return boardsRef.doc(doc.id).delete();
            })

            // Delete team doc 
            return teamRef.delete();
        } else {
            return null;
        }
    });



