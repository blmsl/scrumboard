import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnInit() {
  }
  constructor(public auth: AuthServiceService, public router: Router, public navbarService: NavbarService) {
    auth.user$.subscribe((user) => {
      if (user) {
        router.navigate(['/']);
      }
    });
    navbarService.hidden = true;
  }
  ngOnDestroy() {
    this.navbarService.hidden = false;
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
