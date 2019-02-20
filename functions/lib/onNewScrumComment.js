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
exports.onNewScrumComments = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}/comments/{commentId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () {
    const firestore = admin.firestore();
    const comment = snap.data();
    const promises = [];
    // Update commentsCount aggregated value
    const scrumRef = snap.ref.parent.parent;
    const data = (yield scrumRef.get()).data();
    if (data.commentsCount) {
        promises.push(scrumRef.update({
            commentsCount: data.commentsCount + 1
        }));
    }
    else {
        promises.push(scrumRef.set({
            commentsCount: 0
        }));
    }
    // Send notifcation to all users
    const team = (yield firestore.doc('teams/' + context.params.teamId).get()).data();
    Object.keys(team.members).forEach(uid => {
        promises.push(firestore.collection('users/' + uid + '/notifications').add({
            title: 'New comment!',
            txt: comment.username + ": " + comment.txt
        }));
    });
    return Promise.all(promises);
}));
exports.onDeletedScrumComments = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}/comments/{commentId}')
    .onDelete((snap, context) => __awaiter(this, void 0, void 0, function* () {
    // Update commentsCount aggregated value
    const scrumRef = snap.ref.parent.parent;
    const data = (yield scrumRef.get()).data();
    return scrumRef.update({
        commentsCount: data.commentsCount - 1
    });
}));
//# sourceMappingURL=onNewScrumComment.js.map