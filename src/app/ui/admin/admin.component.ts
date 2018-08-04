import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireFunctions } from 'angularfire2/functions';
import { AuthServiceService } from './../../services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  navTab = 'users';

  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public auth: AuthServiceService,
    public adminService: AdminService,
    public route: ActivatedRoute,
    public afFunctions: AngularFireFunctions) {
  }
  ngOnInit() {
  }

  creteAdmin(uid, userName) {
    swal.queue([{
      title: `Are you sure?`,
      text: `Are you sure you want to promote ${userName} to admin?`,
      confirmButtonText: 'Make admin',
      showCancelButton: true,
      reverseButtons: true,
      showLoaderOnConfirm: true,
      preConfirm: (value) => {
        const createAdmin = this.afFunctions.httpsCallable('createAdmin');
        return createAdmin({ uid }).toPromise()
          .then(function (data) {
            console.log(`user: ${uid} is now admin`);
          }).catch(function (error) {
            swal({
              title: 'Error',
              text: error.message,
              type: 'error',
            });

          });
      }
    }]);
  }

}
