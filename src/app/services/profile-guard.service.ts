import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

// This is service is used for redirecting non-signed in user to the login page when they
// try to access the profile page

@Injectable()
export class ProfileGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      // if the user is signed in
      if (user) { return true; }

      // if the user is not signed in
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    });
  }
}
