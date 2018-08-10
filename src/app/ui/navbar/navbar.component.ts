import { AngularFirestore } from 'angularfire2/firestore';
import { NavbarService } from './../../services/navbar.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
import { firestore } from '../../../../node_modules/firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {


  profileUrl: string;
  profileName: string;
  profileEmail: string;

  sub: Subscription;

  darkThemeActivated = false;

  private defaultTheme = `
    --header: white;
    --cards: white;
    --txt-color: #484848;
    --txt-color-light: #B2B0B0;
    --bg-color: white;
    --button-color: #4285f4;
    --button-accent: #5491f5;
    --header-title: ;
  `;

  private darkTheme = `
    --header: #1D2A32;
    --txt-color: white;
    --cards: #2B3942;
    --bg-color: #203139;
    --button-color: #e91e63;
    --header-title: #e91e63;
    --button-accent: #eb3472;
  `;

  constructor(public auth: AuthServiceService, public navbarService: NavbarService, public afs: AngularFirestore) {
    this.sub = auth.user$.filter(user => user !== null).subscribe((user) => {
      this.profileUrl = user.photoURL;
      this.profileName = user.displayName;
      this.profileEmail = user.email;
    });
  }

  ngOnInit() {
    // get the saved theme option from localStorage
    try {
      this.darkThemeActivated = JSON.parse(localStorage.darkTheme);
    } catch {
      this.darkThemeActivated = false;
    }
    this.setTheme();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleTheme(event) {
    this.darkThemeActivated = event.checked;
    this.setTheme();
    // save the theme opttion to localStorage
    localStorage.darkTheme = this.darkThemeActivated;
  }

  setTheme() {
    if (this.darkThemeActivated) {
      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'User settings',
        eventLabel: 'Theme set to dark',
        eventAction: 'Toggle theme',
      });
      this.changeCssVariables(this.darkTheme);
    } else {
      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'User settings',
        eventLabel: 'Team set to light',
        eventAction: 'Toggle theme',
      });
      this.changeCssVariables(this.defaultTheme);
    }
  }

  changeCssVariables(theme: string) {
    document.querySelector('body').style.cssText = theme;
  }

  async sendFeedback() {
    const { value: post } = await swal({
      title: 'Send feedback',
      text: 'Please tell us what you are missing with this application and/or what you like about it.',
      html: `
      <select id="feedbackSelect" class="swal2-select" style="outline:0;">
        <option value="General">General</option>
        <option value="Bug">Bug</option>
        <option value="Improvements">Improvements</option>
        <option value="Feature request">Feature request</option>
      </select>
      <textarea id="feedbackTxt" class="swal2-textarea"></textarea>`,
      confirmButtonText: 'Send',
      showCancelButton: true,
      reverseButtons: true,
      preConfirm: () => {
        return[
          (<HTMLInputElement>document.getElementById('feedbackSelect')).value,
          (<HTMLInputElement>document.getElementById('feedbackTxt')).value,
        ];
      }
    });
    if (post[1] !== '') {
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'User action',
          eventAction: 'Sent feedback',
        });
        this.auth.user$.take(1).subscribe(user => {
          this.afs.collection('feedback').add({
            category: post[0],
            txt: post[1],
            date: firestore.FieldValue.serverTimestamp(),
            uid: user.uid,
            name: user.displayName,
            email: user.email
          }).then(() => {
            swal(
              'Thank you!',
              'We have recieved your feedback.',
              'success'
            );
          }).catch(() => swal(
            'Error',
            'Your feedback was not sent, please try again',
            'error'
          ));
        });
    } else if (post[1] === '') {
      swal({
        title: 'Invalid.',
        type: 'error',
        text: 'Please fill in something!'
      });
    }
  }

}
