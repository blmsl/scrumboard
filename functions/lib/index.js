"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
admin.initializeApp({
    storageBucket: 'magson-developer.appspot.com',
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
const addNonExistentUsers_1 = require("./addNonExistentUsers");
exports.addNonExistentUsers = addNonExistentUsers_1.addNonExistentUsers;
const sendInviteToNonExistentUsers_1 = require("./sendInviteToNonExistentUsers");
exports.sendInviteToNonExistentUsers = sendInviteToNonExistentUsers_1.sendInviteToNonExistentUsers;
const sendWelcomeEmail_1 = require("./sendWelcomeEmail");
exports.sendWelcomeEmail = sendWelcomeEmail_1.sendWelcomeEmail;
const newRequest_1 = require("./newRequest");
exports.newRequest = newRequest_1.newRequest;
const listAllUsers_1 = require("./listAllUsers");
exports.listAllUsers = listAllUsers_1.listAllUsers;
const getUserByMail_1 = require("./getUserByMail");
exports.getUserByMail = getUserByMail_1.getUserByMail;
const deleteEmptyTeams_1 = require("./deleteEmptyTeams");
exports.deleteEmptyTeams = deleteEmptyTeams_1.deleteEmptyTeams;
const createAdmin_1 = require("./createAdmin");
exports.createAdmin = createAdmin_1.createAdmin;
const addMember_1 = require("./addMember");
exports.addMember = addMember_1.addMember;
const accountcleanup_1 = require("./accountcleanup");
exports.accountcleanup = accountcleanup_1.accountcleanup;
const teamImageResizer_1 = require("./teamImageResizer");
exports.teamImageResizer = teamImageResizer_1.teamImageResizer;
const deleteScrum_1 = require("./deleteScrum");
exports.deleteScrum = deleteScrum_1.deleteScrum;
const scrumAggregation_1 = require("./scrumAggregation");
exports.onTodoCreated = scrumAggregation_1.onTodoCreated;
exports.onTodoDeleted = scrumAggregation_1.onTodoDeleted;
exports.onInProgressCreated = scrumAggregation_1.onInProgressCreated;
exports.onInProgressDeleted = scrumAggregation_1.onInProgressDeleted;
exports.onDoneCreated = scrumAggregation_1.onDoneCreated;
exports.onDoneDeleted = scrumAggregation_1.onDoneDeleted;
//# sourceMappingURL=index.js.map