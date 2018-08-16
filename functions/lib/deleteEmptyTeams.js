"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.deleteEmptyTeams = functions.firestore
    .document('teams/{teamId}')
    .onUpdate((change, context) => {
    const newData = change.after.data();
    const teamId = context.params.teamId;
    if (Object.keys(newData.members).length === 0 && newData.members.constructor === Object) {
        // No more members... delete team
        return admin.firestore().doc(`teams/${teamId}`).delete();
    }
    else {
        return null;
    }
});
//# sourceMappingURL=deleteEmptyTeams.js.map