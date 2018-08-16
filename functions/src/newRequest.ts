import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

const mailTransport = nodemailer.createTransport(`smtps://${'magson.dev@gmail.com'}:${'m@gs0n123'}@smtp.gmail.com`);

// when a new user is added to the team => send them an invitation email with an confirmation link 

export const newRequest = functions.firestore
    .document('teams/{teamId}')
    .onUpdate((change, context) => {
        const newData = change.after.data();
        const teamName = newData.name;
        const teamId = context.params.teamId;

        let uid;
        let userEmail;
        let firstName;

        const members = newData.members;
        let mail = false;
        Object.keys(members).forEach(function (key, idx) {
            if (members[key].isMember === 'mail') { // if send mail
                mail = true;
                uid = key;
            }
        });
        if (mail === false) { // gjør at function stopper når den starter seg selv
            return null;
        } else { // send invite og
            return admin.auth().getUser(uid).then(function (userRecord) {
                userEmail = userRecord.email;
                firstName = userRecord.displayName.substr(0, userRecord.displayName.indexOf(' '));
                const newMembers = newData.members;
                newMembers[uid].isMember = false;
                return admin.firestore().doc(`teams/${teamId}`).update({
                    members: newMembers
                });
            }).then(() => {
                return sendInvite(userEmail, uid, teamName, teamId, firstName);
            }).catch(err => console.log('Error:', err));
        }
    });

function sendInvite(email, uid, teamName, teamId, firstName) {
    const mailOptions = {
        from: 'MAGSON <support@magson.no>',
        to: email,
        subject: `Invitation to join ${teamName}`,
        html: `
    <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300" rel="stylesheet">
    </head>
         <body style="margin: 0; background-color: white;">
      <header style="background-color: #4285f4; padding: 75px 50px;">
          <h1 style="font-family:roboto;font-weight:500;text-align:center;color:white;margin:0;">Hello ${firstName}</h1>
      </header>
      <main style="display: table; margin: 0 auto; padding: 10px;">
          <br>
          <br>
          <br>
          <div class="textDiv" style="display:table;margin:10px auto;margin-bottom:50px;">
              <p style="font-family:roboto;font-weight:300;margin:0;margin-bottom:3px;color:#484848;font-size:18px;">
              You have been invited by ${teamName} to join their team!</p>
              <p style="font-family:roboto;font-weight:300;margin:0;margin-bottom:3px;color:#484848;font-size:18px;">
              If you accept this invitation, please click the button below</p>
          </div>
          <div style="display: table; margin: 100px auto; margin-bottom: 50px;">
              <a href="https://us-central1-magson-developer.cloudfunctions.net/addMember?uid=${uid}&teamId=${teamId}&teamName=${teamName}"
              style="font-family:roboto;font-weight:500;color:#4285f4;border:3px solid #4285f4;
              border-radius:5px;padding:20px;margin:20px 0;width:auto;
              cursor:pointer;transition:all .3s;">Join ${teamName}</a>
          </div>
          <br>
          <div class="footer" style="display:table;margin:10px auto;margin-bottom:50px;">
              <h3 style="font-family:roboto;font-weight:400;text-align:center;color:#484848;margin-bottom:5px;">The Magson team</h3>
              <img src="https://magson.no/images/logoWhite.jpg" alt="magsonLogo" style="width: 250px;">
          </div>
      </main>
  </body>
          `};

    return mailTransport.sendMail(mailOptions);
}
