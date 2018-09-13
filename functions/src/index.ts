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

export { accountcleanup };
export { addMember }
export { createAdmin }
export { deleteEmptyTeams }
export { getUserByMail }
export { listAllUsers }
export { newRequest }
export { deleteScrum }
export { sendWelcomeEmail }
export { sendInviteToNonExistentUsers }
export { addNonExistentUsers }
export { teamImageResizer }