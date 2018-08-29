"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fs = admin.firestore();
exports.deleteEmptyTeams = functions.firestore
    .document('teams/{teamId}')
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    const newData = change.after.data();
    const teamId = context.params.teamId;
    if (Object.keys(newData.members).length === 0 && newData.members.constructor === Object) {
        // No more members... delete team
        const teamRef = fs.doc(`teams/${teamId}`);
        const boardsRef = teamRef.collection('boards');
        // Delete all boards with subcollections: todo, inprogress, done
        const boards = yield boardsRef.get();
        yield boards.forEach(doc => {
            return Promise.all([
                deleteCollection(boardsRef.doc(doc.id).collection('todo'), 50),
                deleteCollection(boardsRef.doc(doc.id).collection('inProgress'), 50),
                deleteCollection(boardsRef.doc(doc.id).collection('done'), 50),
                boardsRef.doc(doc.id).delete(),
            ]);
        });
        // Delete team doc 
        return teamRef.delete();
    }
    else {
        return null;
    }
}));
function deleteCollection(collectionRef, batchSize) {
    const query = collectionRef.limit(batchSize);
    return new Promise((resolve, reject) => {
        deleteQueryBatch(fs, query, batchSize, resolve, reject);
    });
}
function deleteQueryBatch(db, query, batchSize, resolve, reject) {
    query.get()
        .then((snapshot) => {
        // When there are no documents left, we are done
        if (snapshot.size === 0) {
            return 0;
        }
        // Delete documents in a batch
        const batch = db.batch();
        snapshot.docs.forEach((doc) => {
            batch.delete(doc.ref);
        });
        return batch.commit().then(() => {
            return snapshot.size;
        });
    }).then((numDeleted) => {
        if (numDeleted === 0) {
            resolve();
            return;
        }
        // Recurse on the next process tick, to avoid
        // exploding the stack.
        process.nextTick(() => {
            deleteQueryBatch(db, query, batchSize, resolve, reject);
        });
    })
        .catch(reject);
}
//# sourceMappingURL=deleteEmptyTeams.js.map