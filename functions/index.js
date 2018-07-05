/* 'use strict'; */
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const promisePool = require('es6-promise-pool');
const PromisePool = promisePool.PromisePool;
const secureCompare = require('secure-compare');
const MAX_CONCURRENT = 3;

admin.initializeApp();

const mailTransport = nodemailer.createTransport(
  `smtps://${"magson.dev@gmail.com"}:${"m@gs0n123"}@smtp.gmail.com`);

exports.newRequest = functions.firestore
  .document('teams/{teamId}')
  .onUpdate((change, context) => {
    const newData = change.after.data();
    const teamName = newData.name;
    const teamId = context.params.teamId;

    let uid;
    let userEmail;

    const members = newData.members;
    let mail = false;
    Object.keys(members).forEach(function (key, idx) {
      if (members[key] === 'mail') { // if send mail
        mail = true;
        uid = key;
      }
    });
    if (mail === false) {
      return null;
    } else {
      return admin.auth().getUser(uid).then(function (userRecord) {
        userEmail = userRecord.toJSON().email;
        members[uid] = false;
        return admin.firestore().doc(`teams/${teamId}`).update({
          members
        })
      }).then(function () {
        return sendInvite(userEmail, uid, teamName, teamId)
      }).then(function () {}).catch(err => console.log('Error:', err));
    }
  });

function sendInvite(email, uid, teamName, teamId) {
  const mailOptions = {
    from: 'MAGSON <support@magson.no>',
    to: email
  };

  mailOptions.subject = `Invitation to join ${teamName}`;
  mailOptions.html = `
        <h1>Magson Scrum</h1>
        <p>You have been invited to join ${teamName} on Magson scrum</p>
        <p>To join, click the button below</p>
        <br>
        <a href="https://us-central1-magson-developer.cloudfunctions.net/addMember?uid=${uid}&teamId=${teamId}&teamName=${teamName}"> Join </a>
        <p>If you do not want to join this project, please disregard this email.</p>
        <br>
        <br>
        <p>The Magson team</p>
        `
  return mailTransport.sendMail(mailOptions)
}

exports.addMember = functions.https.onRequest((req, res) => {
  const UID = getParameterByName('uid', req.url);
  const teamId = getParameterByName('teamId', req.url);
  const teamName = getParameterByName('teamName', req.url);

  var Members;

  return admin.firestore().doc(`teams/${teamId}`).get().then(doc => {
      Members = doc.data().members;
      Members[UID] = true; // setting user to true in member object

      return admin.firestore().doc(`teams/${teamId}`).update({
        members: Members
      });
    }).then(() => res.send(`You have succesfully joined ${teamName}`))
    .catch(err =>
      console.error('Error:', err));

});

exports.getUserByMail = functions.https.onCall((data, context) => {
  const mail = data.mail;
  return admin.auth().getUserByEmail(mail)
    .then(function (userRecord) {
      const userData = userRecord.toJSON();
      return {
        userData: userData
      }
    }).catch(err => {
      switch (err.code) {
        case 'auth/user-not-found':
          throw new functions.https.HttpsError('not-found', 'We could not find any user with this email');
          break;
        default:
          throw new functions.https.HttpsError('aborted', 'An error has occured, please try again later');
          break;
      }

    });
});

exports.deleteEmptyTeams = functions.firestore
  .document('teams/{teamId}')
  .onUpdate((change, context) => {
    const newData = change.after.data();
    const teamId = context.params.teamId;

    if (isEmpty(newData.members)) {
      // No more members... delete team
      return admin.firestore().doc(`teams/${teamId}`).delete();
    } else {
      return null
    }
  });

exports.createAdmin = functions.https.onCall((data, context) => {
  const uid = data.uid;
  const clientUID = context.auth.uid;

  admin.auth().getUser(clientUID).then((userRecord) => {
    if (userRecord.customClaims.admin) {
      // Client is admin
      return admin.auth().setCustomUserClaims(uid, {
        admin: true
      }).then(() => {
        console.log(uid + ' is now admin');
      }).catch(err => {
        throw new functions.https.HttpsError('aborted', 'An error has occured, please try again later');
      });

    } else {
      // Client is not admin
      throw new functions.https.HttpsError('permission-denied', 'You must be an admin to promote other users to admin.');
    }
  });
});



/* exports.listAllUsers = functions.https.onCall((data, context) => {
  // List all users
   return listAllUsers();
});

function listAllUsers(nextPageToken, res) {
  // List batch of users, 1000 at a time.
  admin.auth().listUsers(1000, nextPageToken)
    .then(function (listUsersResult) {
      listUsersResult.users.forEach(function (userRecord) {
        const userData = userRecord.toJSON();
        console.log("user", userRecord.toJSON());
        return {
          // return users to client
        }
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken)
      }
    })
    .catch(function (error) {
      console.log("Error listing users:", error);
    });
} */


/*  exports.deleteUserData = functions.auth.user().onDelete((user) => {
   // Delete all memberships user are part in
 }); */

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {

  const email = user.email;
  const name = user.displayName;
  const photoURL = user.photoURL;
  const firstName = name.substr(0, str.indexOf(' '));

  const mailOptions = {
    from: 'MAGSON <support@magson.no>',
    to: email
  };

  mailOptions.subject = `Welcome to Magson Scrum`;
  mailOptions.html = `
        <body style = "margin: 0; background-color: white;">
          <header style="background-color: #4285f4; padding: 75px 50px;">
            <h1 style="font-family:roboto;font-weight:500;text-align:center;color:white;margin:0;">Hello ${firstName}</h1>
          </header>
          <main style="display: table; margin: 0 auto;">
            <br>
            <p style="font-family:roboto;font-weight:300;margin:0;margin-bottom:3px;color:#484848;">We are very pleased you have decided to use Magson Scrum as a tool for your developing.</p>
            <p style="font-family:roboto;font-weight:300;margin:0;margin-bottom:3px;color:#484848;">If you have any questions or issues of any kind, please feel free to
              <a href="mailto:support@magson.no" target="_top" style="font-family:roboto;font-weight:300;color:#484848;">contact us!</a>
            </p>
            <div class="footer" style="display: table;margin: 10px auto;">
              <h3 style="font-family:roboto;font-weight:400;text-align:center;color:#484848;margin-bottom:5px;">The Magson team</h3>
              <img src="https://magson.no/images/logoWhite.jpg" alt="magsonLogo" style="width: 250px;">
            </div>
          </main>
        </body>
        `
  return mailTransport.sendMail(mailOptions)

});

/*  exports.sendByeEmail = functions.auth.user().onDelete((user) => {
   // ...
 }); */

exports.accountcleanup = functions.https.onRequest((req, res) => {
  const key = req.query.key;
  // Exit if the keys don't match.
  if (!secureCompare(key, functions.config().cron.key)) {
    console.log('The key provided in the request does not match the key set in the environment. Check that', key,
      'matches the cron.key attribute in `firebase env:get`');
    res.status(403).send('Security key does not match. Make sure your "key" URL query parameter matches the ' +
      'cron.key environment variable.');
    return null;
  }

  // Fetch all user details.
  return getInactiveUsers().then((inactiveUsers) => {
    // Use a pool so that we delete maximum `MAX_CONCURRENT` users in parallel.
    const promisePool = new PromisePool(() => deleteInactiveUser(inactiveUsers), MAX_CONCURRENT);
    return promisePool.start();
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
    const inactiveUsers = result.users.filter(
      user => Date.parse(user.metadata.lastSignInTime) < (Date.now() - 100 * 24 * 60 * 60 * 1000));

    // Concat with list of previously found inactive users if there was more than 1000 users.
    users = users.concat(inactiveUsers);

    // If there are more users to fetch we fetch them.
    if (result.pageToken) {
      return getInactiveUsers(users, result.pageToken);
    }
    return users;
  });
}


function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function isEmpty(obj) {
  for (var prop in obj) {
    return false;
  }
  return true;
}
