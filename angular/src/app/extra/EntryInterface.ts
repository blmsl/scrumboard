import * as firebase from 'firebase/app';
import 'firebase/firestore';
export interface EntryInterface {
    txt: string;
    state?: 'todo' | 'inProgress' | 'done';
    priority?: '!' | '!!' | '!!!';
    time: firebase.firestore.FieldValue;
    imgUrl?: string;
    commentsCount?: number;
    developer?: string;
    id?: string;
    assigned?: string;
    link?: {
        url: string,
        imageUrl?: string;
        title?: string;
        description?: string;
    };
}
