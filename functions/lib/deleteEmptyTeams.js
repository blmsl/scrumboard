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
const deleteSubcollections_1 = require("./shared/deleteSubcollections");
const fs = admin.firestore();
exports.deleteEmptyTeams = functions.firestore
    .document('teams/{teamId}')
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    const newData = change.after.data();
    const teamId = context.params.teamId;
    if (Object.keys(newData.members).length === 0 && newData.members.constructor === Object) {
        // No more members... delete team
        const teamRef = fs.doc(`teams/${teamId}`);
        const boardsRef = teamRef.collection('boards');
        // Delete all boards with subcollections: todo, inprogress, done
        const boards = yield boardsRef.get();
        yield boards.forEach((doc) => __awaiter(this, void 0, void 0, function* () {
            yield deleteSubcollections_1.deleteSubcollections(boardsRef.doc(doc.id), ['todo', 'inProgress', 'done']);
            // Delte scrum document
            return boardsRef.doc(doc.id).delete();
        }));
        // Delete team doc 
        return teamRef.delete();
    }
    else {
        return null;
    }
}));
//# sourceMappingURL=deleteEmptyTeams.js.map