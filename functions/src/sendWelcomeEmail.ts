import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const mailTransport = nodemailer.createTransport(`smtps://${'magson.dev@gmail.com'}:${'m@gs0n123'}@smtp.gmail.com`);

export const sendWelcomeEmail = functions.auth.user().onCreate((user) => {

    const email = user.email;
    const name = user.displayName;
    const firstName = name.substr(0, name.indexOf(' '));

    const mailOptions = {
        from: 'MAGSON <support@magson.no>',
        to: email,
        subject: 'Welcome to Magson Scrum',
        html: `
          <head>
          <link href="https://fonts.googleapis.com/css?family=roboto:100,300" rel="stylesheet">
        </head>
          <body style = "margin: 0; background-color: white;">
            <header style="background-color: #4285f4; padding: 75px 50px;">
              <h1 style="font-family:roboto;font-weight:500;text-align:center;color:white;margin:0;">Hello ${firstName}</h1>
            </header>
            <main style="display: table; margin: 0 auto; padding:20px">
              <br>
              <p style="font-family:roboto;font-weight:300;margin:0;margin-bottom:3px;color:#484848;font-size: 18px;">
              We are very pleased you have decided to use Magson Scrum as a tool for your developing.</p>
              <p style="font-family:roboto;font-weight:300;margin:0;margin-bottom:3px;color:#484848;font-size: 18px;">
              If you have any questions or issues of any kind, please feel free to
                <a href="mailto:support@magson.no" target="_top" style="font-family:roboto;font-weight:300;color:#484848;">contact us!</a>
              </p>
              <div class="footer" style="display: table;margin: 10px auto;">
                <h3 style="font-family:roboto;font-weight:400;text-align:center;color:#484848;margin-bottom:5px;">The Magson team</h3>
                <img src="https://magson.no/images/logoWhite.jpg" alt="magsonLogo" style="width: 250px;">
              </div>
            </main>
          </body>
         `};
        return mailTransport.sendMail(mailOptions);

    });
