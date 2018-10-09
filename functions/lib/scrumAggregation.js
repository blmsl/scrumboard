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
exports.onTodoCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/todo/{entryId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, 'todo', true); }));
exports.onTodoDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/todo/{entryId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, 'todo', false); }));
exports.onInProgressCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/inProgress/{entryId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, 'inProgress', true); }));
exports.onInProgressDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/inProgress/{entryId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, 'inProgress', false); }));
exports.onDoneCreated = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/done/{entryId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, 'done', true); }));
exports.onDoneDeleted = functions.firestore
    .document('teams/{teamId}/boards/{boardId}/done/{entryId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () { return update(context.params.teamId, context.params.boardId, 'done', false); }));
function update(teamId, boardId, subcollection, increment) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log({ teamId, boardId, subcollection, increment });
        const boardDoc = (yield fs.doc('teams/' + teamId + '/boards/' + boardId).get()).data();
        let aggregatedData = boardDoc.aggregatedData;
        if (aggregatedData) {
            if (increment)
                aggregatedData[subcollection]++;
            else
                aggregatedData[subcollection]--;
        }
        else {
            aggregatedData = { todo: 0, inProgress: 0, done: 0 };
        }
        ;
        return fs.doc('teams/' + teamId + '/boards/' + boardId).update({ aggregatedData });
    });
}
//# sourceMappingURL=scrumAggregation.js.map