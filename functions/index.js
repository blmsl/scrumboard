const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

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
        return admin.firestore().doc(`teams/${teamId}`).update({ members })
      }).then(function () {
        return sendInvite(userEmail, uid, teamName, teamId)
      }).then(function () {
      }).catch(err => console.log('Error:', err));
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
    });
});


function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
