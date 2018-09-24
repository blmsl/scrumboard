import * as firebase from 'firebase/app';
import 'firebase/firestore';
export interface FeedbackInterface {
  name: string;
  category: string;
  txt: string;
  email: String;
  uid: String;
  date: firebase.firestore.FieldValue;
}
