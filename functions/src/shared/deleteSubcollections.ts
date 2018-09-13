import * as admin from 'firebase-admin';

const fs = admin.firestore();

export function deleteSubcollections(ref: FirebaseFirestore.DocumentReference, subCollections: string[], batchSize = 50) {
    subCollections.map(stringRef => deleteCollection(ref.collection(stringRef), batchSize));
    return Promise.all(subCollections);
}

function deleteCollection(collectionRef: FirebaseFirestore.CollectionReference, batchSize: number) {
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
