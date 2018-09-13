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
const deleteSubcollections_1 = require("./shared/deleteSubcollections");
// When a user deltes the scrum document => delete all subcollections
exports.deleteScrum = functions.firestore
    .document('teams/{teamId}/boards/{boardId}')
    .onDelete((snap, context) => __awaiter(this, void 0, void 0, function* () {
    const ref = snap.ref;
    return deleteSubcollections_1.deleteSubcollections(ref, ['todo', 'inProgress', 'done']);
}));
//# sourceMappingURL=deleteScrum.js.map