import { AngularFirestore } from 'angularfire2/firestore';
import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from './../../services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFireFunctions } from 'angularfire2/functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loading = true;
  loadingTxt: string;

  teamId: string;
  code: string;

  constructor(public auth: AuthServiceService, public route: ActivatedRoute, public router: Router, public navbarService: NavbarService,
    public afs: AngularFirestore, public afFunctions: AngularFireFunctions, ) {
    navbarService.hidden = true;
    this.teamId = this.route.snapshot.queryParamMap.get('teamId');
    this.code = this.route.snapshot.queryParamMap.get('code');
    console.log({ code: this.code, teamId: this.teamId });
  }

  ngOnInit() {
    this.sub = this.auth.user$.subscribe(user => {
      this.loading = false;
      if (user) {
        if (this.teamId && this.code) {
          this.loading = true;
          // Join the team
          console.log('adding the user to the team');
          this.loadingTxt = 'Adding you to the team, please wait';
          const addNonExistentUsers = this.afFunctions.httpsCallable('addNonExistentUsers');
          addNonExistentUsers({
            code: this.code, uid: user.uid, teamId: this.teamId,
            imgUrl: user.photoURL, name: user.displayName
          }).toPromise().then(() => {
            this.redirect(user);
          });
        } else {
          this.redirect(user);
        }
      }
    });
  }

  redirect(user: firebase.User) {
    // Add user doc if not exists
    this.afs.doc('users/' + user.uid).set({
      fcmTokens: []
    }, { merge: true });

    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.navbarService.hidden = false;
    this.sub.unsubscribe();
  }

  signInWithFacebook() {
    this.loading = true;
    this.auth.signInWithFacebook();
  }

  signInWithGoogle() {
    this.loading = true;
    this.auth.signInWithGoogle();
  }


}
