"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const secureCompare = require("secure-compare");
const promisePool = require('es6-promise-pool');
const PromisePool = promisePool.PromisePool;
const MAX_CONCURRENT = 3;
exports.accountcleanup = functions.https.onRequest((req, res) => {
    const key = req.query.key;
    // Exit if the keys don't match.
    if (!secureCompare(key, functions.config().cron.key)) {
        console.log('The key provided in the request does not match the key set in the environment. Check that', key, 'matches the cron.key attribute in `firebase env:get`');
        res.status(403).send('Security key does not match. Make sure your "key" URL query parameter matches the ' +
            'cron.key environment variable.');
        return null;
    }
    // Fetch all user details.
    return getInactiveUsers().then((inactiveUsers) => {
        // Use a pool so that we delete maximum `MAX_CONCURRENT` users in parallel.
        const myPromisePool = new PromisePool(() => deleteInactiveUser(inactiveUsers), MAX_CONCURRENT);
        return myPromisePool.start();
    }).then(() => {
        console.log('User cleanup finished');
        res.send('User cleanup finished');
        return null;
    });
});
/**
 * Deletes one inactive user from the list.
 */
function deleteInactiveUser(inactiveUsers) {
    if (inactiveUsers.length > 0) {
        const userToDelete = inactiveUsers.pop();
        // Delete the inactive user.
        return admin.auth().deleteUser(userToDelete.uid).then(() => {
            // User has been deleted
            return null;
        }).catch(error => {
            console.error('Deletion of inactive user account', userToDelete.uid, 'failed:', error);
            return null;
        });
    }
    return null;
}
/**
* Returns the list of all inactive users.
*/
function getInactiveUsers(users = [], nextPageToken) {
    return admin.auth().listUsers(1000, nextPageToken).then((result) => {
        // Find users that have not signed in in the last 100 days.
        const inactiveUsers = result.users.filter(user => Date.parse(user.metadata.lastSignInTime) < (Date.now() - 100 * 24 * 60 * 60 * 1000));
        // Concat with list of previously found inactive users if there was more than 1000 users.
        // tslint:disable-next-line:no-parameter-reassignment
        users = users.concat(inactiveUsers);
        // If there are more users to fetch we fetch them.
        if (result.pageToken) {
            return getInactiveUsers(users, result.pageToken);
        }
        return users;
    });
}
//# sourceMappingURL=accountcleanup.js.map