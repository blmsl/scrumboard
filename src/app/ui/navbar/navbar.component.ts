import { NavbarService } from './../../services/navbar.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';

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

  constructor(public auth: AuthServiceService, public navbarService: NavbarService) {
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
    console.log('retrieved from localStorage | darkTheme:', this.darkThemeActivated);
    this.setTheme();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleTheme(event) {
    this.darkThemeActivated = event.checked;
    console.log('toggling theme | darkTheme: ', this.darkThemeActivated);
    this.setTheme();
    // save the theme opttion to localStorage
    localStorage.darkTheme = this.darkThemeActivated;
  }

  setTheme() {
    if (this.darkThemeActivated) {
      this.changeCssVariables(this.darkTheme);
    } else {
      this.changeCssVariables(this.defaultTheme);
    }
  }

  changeCssVariables(theme: string) {
    document.querySelector('body').style.cssText = theme;
  }

}
