import { Injectable } from '@angular/core';
import { AngularFireFunctions } from 'angularfire2/functions';
import { AngularFirestoreCollection, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs';
import { FeedbackInterface } from '../extra/feedbackInterface';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  allUsers: Array<string>;

  feedbackCollection: AngularFirestoreCollection<FeedbackInterface>;
  feedback$: Observable<FeedbackInterface[]>;

  constructor(
    public afFunctions: AngularFireFunctions,
    public afs: AngularFirestore
  ) {

    this.feedbackCollection = this.afs.collection<FeedbackInterface>('feedback');
    this.feedback$ = this.feedbackCollection.valueChanges();


    const listAllUsers = this.afFunctions.httpsCallable('listAllUsers');
    listAllUsers({}).toPromise()
      .then(function (result) {
        console.log(result);
      });
  }
}



