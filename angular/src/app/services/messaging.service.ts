import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private afMessaging: AngularFireMessaging, private auth: AuthServiceService, private afs: AngularFirestore) {
    console.log('fcm');
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
}
