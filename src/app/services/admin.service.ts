import { Injectable } from '@angular/core';
import { AngularFireFunctions } from 'angularfire2/functions';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    public afFunctions: AngularFireFunctions

  ) {
    let allUsers = [];

    const listAllUsers = this.afFunctions.httpsCallable('listAllUsers');
    listAllUsers({}).toPromise()
      .then(function (result) {
        allUsers = result;
      });
  }
}
