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
exports.sendNotification = functions.firestore
    .document('users/{uid}/notifications/{notificationId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () {
    const messaging = admin.messaging();
    const firestore = admin.firestore();
    const userId = context.params.uid;
    const message = snap.data();
    const payload = {
        notification: {
            title: message.title,
            body: message.txt,
            icon: "https://scrumboard.io/assets/logo@1024x1024.jpg"
        }
    };
    const user = (yield firestore.doc('users/' + userId).get()).data();
    console.log({ userId, message, user });
    const tokens = user.fcmTokens;
    const promises = [];
    tokens.forEach(token => {
        promises.push(messaging.sendToDevice(token, payload));
    });
    return Promise.all(promises);
}));
//# sourceMappingURL=sendNotification.js.map