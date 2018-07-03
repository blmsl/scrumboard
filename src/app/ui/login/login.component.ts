import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  sub: Subscription;

  constructor(public auth: AuthServiceService, public router: Router, public navbarService: NavbarService) {
    navbarService.hidden = true;
  }

  ngOnInit() {
    this.sub = this.auth.user$.subscribe((user) => {
      this.router.navigate(['/']);
    });
  }


  ngOnDestroy() {
    this.navbarService.hidden = false;
    this.sub.unsubscribe();
  }

  signInWithFacebook() {
    document.getElementById('progressbar').style.display = 'block';
    this.auth.signInWithFacebook();
  }

  signInWithGoogle() {
    document.getElementById('progressbar').style.display = 'block';
    this.auth.signInWithGoogle();
  }


}
