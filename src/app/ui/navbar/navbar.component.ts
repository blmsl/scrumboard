import { NavbarService } from './../../services/navbar.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';


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

  darkTheme = false;
  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer: OverlayContainer, public auth: AuthServiceService, public navbarService: NavbarService) {
    this.sub = auth.user$.subscribe((user) => {
      this.profileUrl = user.photoURL;
      this.profileName = user.displayName;
      this.profileEmail = user.email;
    });
  }

  ngOnInit() {
    // get the saved theme option from localStorage
    this.darkTheme = localStorage.darkTheme;
    console.log('retrieved from localStorage | darkTheme:', this.darkTheme);
    this.setTheme();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    console.log('toggling theme | darkTheme: ', this.darkTheme);
    this.setTheme();
  }

  setTheme() {
    const theme = 'dark-theme';
    if (this.darkTheme === true) {
      this.overlayContainer.getContainerElement().classList.add(theme);
    } else {
      this.overlayContainer.getContainerElement().classList.remove(theme);
    }
    console.log('set theme', theme);
    this.componentCssClass = theme;
    // save the theme opttion to localStorage
    localStorage.darkTheme = this.darkTheme;
  }

}
