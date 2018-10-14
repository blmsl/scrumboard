import * as firebase from 'firebase/app';
import 'firebase/firestore';

export interface CommentInterface {
    username: string;
    txt: string;
    imgUrl: string;
    time: firebase.firestore.FieldValue;
    id?: string;
}
