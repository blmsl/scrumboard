import * as admin from 'firebase-admin';

admin.initializeApp({
    storageBucket: 'magson-developer.appspot.com',
});

const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

import { addNonExistentUsers } from './addNonExistentUsers';
import { sendInviteToNonExistentUsers } from './sendInviteToNonExistentUsers';
import { sendWelcomeEmail } from './sendWelcomeEmail';
import { newRequest } from './newRequest';
import { listAllUsers } from './listAllUsers';
import { getUserByMail } from './getUserByMail';
import { deleteEmptyTeams } from './deleteEmptyTeams';
import { createAdmin } from './createAdmin';
import { addMember } from './addMember';
import { accountcleanup } from './accountcleanup';
import { teamImageResizer } from './teamImageResizer';
import { deleteScrum } from './deleteScrum';
import { onEntryCreated, onEntryDeleted, onEntryUpdated } from './scrumAggregation';
import { sendNotification } from './sendNotification';

export { accountcleanup, addMember, createAdmin, deleteEmptyTeams, 
    getUserByMail, listAllUsers, newRequest, deleteScrum, 
    sendWelcomeEmail, sendInviteToNonExistentUsers, addNonExistentUsers, 
    teamImageResizer, onEntryCreated, onEntryDeleted, onEntryUpdated,
    sendNotification }