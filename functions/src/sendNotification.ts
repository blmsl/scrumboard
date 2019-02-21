import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const sendNotification = functions.firestore
   .document('users/{uid}/notifications/{notificationId}')
   .onCreate(async (snap, context) => {
      const messaging = admin.messaging();
      const firestore = admin.firestore();
      const userId = context.params.uid;
      const notifiation = snap.data();
      const payload = {
         notification: {
            title: notifiation.title,
            body: notifiation.txt,
            click_action: notifiation.link,
            icon: "https://scrumboard.io/assets/logo@1024x1024.jpg"
         }
      };
      const user = (await firestore.doc('users/' + userId).get()).data();
      console.log({ userId, message: notifiation, user })
      const tokens = user.fcmTokens;
      const promises = [];
      tokens.forEach(token => {
         promises.push(messaging.sendToDevice(token, payload));         
      });
      return Promise.all(promises);
   });
