import * as firebase from 'firebase/app';
import 'firebase/firestore';
export interface EntryInterface {
    txt: string;
    state?: 'todo' | 'inProgress' | 'done';
    priority?: string;
    time: firebase.firestore.FieldValue;
    imgUrl?: string;
    developer?: string;
    id?: string;
    threadId?: string;
    assigned?: string;
}
