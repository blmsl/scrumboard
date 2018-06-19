import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase/app';
import { User } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthServiceService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  getUserObservable() {
    return this.user$;
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
