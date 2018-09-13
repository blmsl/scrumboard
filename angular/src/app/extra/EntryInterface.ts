import { firestore } from '../../../node_modules/firebase';

export interface EntryInterface {
    txt: string;
    priority?: string;
    time: firestore.FieldValue;
    imgUrl?: string;
    developer?: string;
    id?: string;
}
