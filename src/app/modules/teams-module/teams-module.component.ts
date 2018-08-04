import { AngularFirestore } from 'angularfire2/firestore';
import { TeamsService } from '../../services/teams.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-teams-module',
  templateUrl: './teams-module.component.html',
  styleUrls: ['./teams-module.component.css']
})
export class TeamsModuleComponent implements OnInit {

  constructor(
    public teamsService: TeamsService,
    public router: Router,
    public afs: AngularFirestore,
    public auth: AuthServiceService,
    public route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  selectTeam(teamId: string) {
    localStorage.previousSelectedTeam = teamId;
    this.router.navigate(['/', teamId]);
  }

  leaveTeam(teamId: string, ) {
    // update members
    swal({
      title: 'Are you sure?',
      text: 'Are you sure you want to leave this team?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Leave',
      confirmButtonColor: '#e95d4f',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        this.auth.user$.take(1).subscribe(user => {
          const ref = this.afs.firestore.doc(`teams/${teamId}`);
          this.afs.firestore.runTransaction(transaction =>
            transaction.get(ref).then(doc => {
              const members = doc.data().members;
              delete members[user.uid];
              return transaction.update(ref, { members });
            }).then(() => {
              swal({
                title: `Success`,
                type: 'success',
                text: 'You have successfully left this team',
              }).then(() => this.router.navigate(['/']));
              // Google analytics event
              (<any>window).ga('send', 'event', {
                eventCategory: 'Team management',
                eventAction: 'Leave team',
              });
            })
              .catch(err => {
                swal({
                  title: `Error`,
                  type: 'error',
                  text: err.message,
                });
              })
          );
        });
      }
    });
  }
}
