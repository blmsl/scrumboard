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
const fs = admin.firestore();
exports.onEntryCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, { add: snap.data().state, delete: false }); }));
exports.onEntryDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}')
    .onDelete((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, { add: false, delete: snap.data().state }); }));
exports.onEntryUpdated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/entries/{entryId}')
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    const before = change.before.data();
    const after = change.after.data();
    if (before.state === after.state)
        return false;
    return update(context.params.teamId, context.params.boardId, { delete: before.state, add: after.state });
}));
function update(teamId, boardId, stateChange) {
    return __awaiter(this, void 0, void 0, function* () {
        const boardDoc = (yield fs.doc('teams/' + teamId + '/boards/' + boardId).get()).data();
        let aggregatedData = boardDoc.aggregatedData;
        if (!aggregatedData) {
            aggregatedData = { todo: 0, inProgress: 0, done: 0 };
        }
        if (stateChange.add) {
            aggregatedData[stateChange.add]++;
        }
        if (stateChange.delete) {
            aggregatedData[stateChange.delete]--;
        }
        return fs.doc('teams/' + teamId + '/boards/' + boardId).update({ aggregatedData });
    });
}
//# sourceMappingURL=scrumAggregation.js.map