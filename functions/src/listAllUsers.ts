import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const listAllUsers = functions.https.onCall((data, context) => {
    // List all users
    return listAllUsersFunc();
  });

function listAllUsersFunc(nextPageToken?) {
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
        } else {
          // All users have been fetched
          console.log('All users have been fetched');

          return allUsers;
        }
      })
      .catch(function (error) {
        console.log('Error listing users:', error);
      });

  }
