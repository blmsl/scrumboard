import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthServiceService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  getUserObservable() {
    return this.user$;
  }

  loginWithGithub() {
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
