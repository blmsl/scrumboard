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
exports.addNonExistentUsers = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    const fs = admin.firestore();
    const codeToDelete = data.code;
    const uid = data.uid;
    const teamId = data.teamId;
    const imgUrl = data.imgUrl;
    const name = data.name;
    // Delete the code entry from the codes collection to prevent multiple users join the team with same link
    const snap = yield fs.collection('teams/' + teamId + '/codes').where('code', '==', codeToDelete).get();
    snap.forEach((doc) => __awaiter(this, void 0, void 0, function* () {
        const docData = doc.data();
        // If the user has a valid code
        if (docData.code === codeToDelete) {
            yield doc.ref.delete();
            // Add the user to the team
            const teamDoc = yield admin.firestore().doc(`teams/${teamId}`).get();
            const members = teamDoc.data().members;
            members[uid] = {
                isMember: true,
                imgUrl,
                name
            };
            console.log('Adding new member to the team', members[uid]);
            return admin.firestore().doc(`teams/${teamId}`).update({
                members: members
            });
        }
        else {
            return null;
        }
    }));
}));
//# sourceMappingURL=addNonExistentUsers.js.map