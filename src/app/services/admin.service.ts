import { Injectable } from '@angular/core';
import { AngularFireFunctions } from 'angularfire2/functions';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  allUsers: Array<string>;

  constructor(
    public afFunctions: AngularFireFunctions

  ) {

    const listAllUsers = this.afFunctions.httpsCallable('listAllUsers');
    listAllUsers({}).toPromise()
      .then(function (result) {
        console.log(result);
      });
  }
}
