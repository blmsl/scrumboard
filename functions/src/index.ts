import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

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

export { accountcleanup };
export { addMember }
export {createAdmin}
export { deleteEmptyTeams}
export { getUserByMail }
export {listAllUsers}
export {newRequest}
export {sendWelcomeEmail}
export { sendInviteToNonExistentUsers }
export { addNonExistentUsers }