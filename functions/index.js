const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport(
  `smtps://${"magson.dev@gmail.com"}:${"m@gs0n123"}@smtp.gmail.com`);

exports.newRequest = functions.firestore
  .document('requests/{requestId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    return sendInvite(data.email, data.uid, data.project)
  });

function sendInvite(email, uid, projectName) {
  const mailOptions = {
    from: 'MAGSON <support@magson.no>',
    to: email
  };

  mailOptions.subject = `Invitation to join ${projectName}`;
  mailOptions.html = `
        <h1>Magson Scrum</h1>
        <p>You have been invited to join ${projectName} on Magson scrum</p>
        <p>To join, click the button below</p>
        <br>
        <a href="">Join</a>
        <p>If you do not want to join this project, please disregard this email.</p>
        <br>
        <br>
        <p>The Magson team</p>
        `
  return mailTransport.sendMail(mailOptions)
}

/* 
uid: string,
teamId: string,
*/

exports.addMember = functions.https.onRequest((req, res) => {
  const uid = req.uid;
  const teamId = req.teamId;

  res.send(JSON.parse(req.url));
  
});

