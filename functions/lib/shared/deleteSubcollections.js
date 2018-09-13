"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const fs = admin.firestore();
function deleteSubcollections(ref, subCollections, batchSize = 50) {
    subCollections.map(stringRef => deleteCollection(ref.collection(stringRef), batchSize));
    return Promise.all(subCollections);
}
exports.deleteSubcollections = deleteSubcollections;
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
//# sourceMappingURL=deleteSubcollections.js.map