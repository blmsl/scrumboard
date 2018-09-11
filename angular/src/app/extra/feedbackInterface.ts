import { firestore } from '../../../node_modules/firebase';


export interface FeedbackInterface {
  name: string;
  category: string;
  txt: string;
  email: String;
  uid: String;
  date: firestore.FieldValue;
}
