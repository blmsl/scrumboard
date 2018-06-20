import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profileUrl: string;
  profileName: string;
  profileEmail: string;

  sub: Subscription;

  constructor(public auth: AuthServiceService) {
    this.sub = auth.user$.subscribe((user) => {
      this.profileUrl = user.photoURL;
      this.profileName = user.displayName;
      this.profileEmail = user.email;
    });
  }

  ngOnInit() {
  }

  onDestroy() {
    this.sub.unsubscribe();
  }

}
