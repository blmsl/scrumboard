import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }
  constructor(public auth: AuthServiceService) { }

  signInWithGithub() {
    const that = this;
    this.auth.loginWithGithub();
  }
}
