"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.listAllUsers = functions.https.onCall((data, context) => {
    // List all users
    return listAllUsersFunc();
});
function listAllUsersFunc(nextPageToken) {
    // List batch of users, 1000 at a time.
    const allUsers = [];
    return admin.auth().listUsers(1000, nextPageToken)
        .then(function (listUsersResult) {
        listUsersResult.users.forEach(function (userRecord) {
            // For each user
            const userData = userRecord;
            allUsers.push(userData);
        });
        if (listUsersResult.pageToken) {
            // List next batch of users.
            return listAllUsersFunc(listUsersResult.pageToken);
        }
        else {
            // All users have been fetched
            console.log('All users have been fetched');
            return allUsers;
        }
    })
        .catch(function (error) {
        console.log('Error listing users:', error);
    });
}
//# sourceMappingURL=listAllUsers.js.map