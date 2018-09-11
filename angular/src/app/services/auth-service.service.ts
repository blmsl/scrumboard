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
    // Google analytics event
    (<any>window).ga('send', 'event', {
      eventCategory: 'Auth',
      eventLabel: 'Signed in with Google',
      eventAction: 'Sign in',
    });
    return this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  signInWithFacebook() {
    // Google analytics event
    (<any>window).ga('send', 'event', {
      eventCategory: 'Auth',
      eventLabel: 'Signed in with Facebook',
      eventAction: 'Sign in',
    });
    return this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());
  }

  resetPassword(email: string) {
    // Google analytics event
    (<any>window).ga('send', 'event', {
      eventCategory: 'Auth',
      eventAction: 'Requested password reset',
    });
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logOut() {
    // Google analytics event
    (<any>window).ga('send', 'event', {
      eventCategory: 'Auth',
      eventAction: 'Signed out',
    });
    this.afAuth.auth.signOut().then(() => this.router.navigate(['login']));
  }

}
