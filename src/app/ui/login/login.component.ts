import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }
  constructor(public auth: AuthServiceService, public router: Router) {
    auth.user$.subscribe((user) => {
      if (user) {
        router.navigate(['/']);
      }
    });
  }
}
