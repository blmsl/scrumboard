import * as firebase from 'firebase/app';
import 'firebase/firestore';
export interface EntryInterface {
    txt: string;
    priority?: string;
    time: firebase.firestore.FieldValue;
    imgUrl?: string;
    developer?: string;
    id?: string;
    threadId?: string;
}
