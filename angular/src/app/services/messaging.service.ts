import { NotificationInterface } from './../extra/NotificationInterface';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  notifications$: Observable<NotificationInterface[]>;

  constructor(private afMessaging: AngularFireMessaging, private auth: AuthServiceService, private afs: AngularFirestore) {
    this.notifications$ = this.auth.user$.switchMap(user => {
      return this.toMap(this.afs.collection<NotificationInterface>('users/' + user.uid + '/notifications').snapshotChanges());
    });

    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          console.log(token);
          // Upload token to server
          this.auth.user$.filter(user => user != null).subscribe(user => {
            this.afs.doc<any>('users/' + user.uid).update({
              fcmTokens: firestore.FieldValue.arrayUnion(token)
            });
          });
        },
        (error) => { console.error(error); },
      );
  }

  toMap(observable: Observable<DocumentChangeAction<NotificationInterface>[]>): Observable<NotificationInterface[]> {
    return observable.map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as NotificationInterface;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }


}
