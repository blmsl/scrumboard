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
const nodemailer = require("nodemailer");
const mailTransport = nodemailer.createTransport(`smtps://${'magson.dev@gmail.com'}:${'m@gs0n123'}@smtp.gmail.com`);
exports.sendInviteToNonExistentUsers = functions.firestore.document('teams/{teamId}/codes/{codeId}').onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () {
    const fs = admin.firestore();
    const data = snap.data();
    const mail = data.mail;
    const teamId = context.params.teamId;
    const teamName = data.teamName;
    const code = data.code;
    let name = mail.replace(/@.*|\..*/, ""); // Extract name form email
    name = name.charAt(0).toUpperCase() + name.slice(1); // Capitilize name
    // send mail
    return sendInvite(mail, name, teamName, teamId, code);
}));
function sendInvite(email, name, teamName, teamId, code) {
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
          <h1 style="font-family:roboto;font-weight:500;text-align:center;color:white;margin:0;">Hello ${name}</h1>
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
              <a href="https://scrum.magson.no/login?teamId=${teamId}&code=${code}"
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
          `
    };
    return mailTransport.sendMail(mailOptions);
}
//# sourceMappingURL=sendInviteToNonExistentUsers.js.map