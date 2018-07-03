import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase/app';
import { User } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, public router: Router) {
    this.user$ = afAuth.authState;
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  signInWithFacebook() {
    return this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logOut() {
    this.afAuth.auth.signOut().then(() => this.router.navigate(['login']));
  }

}
