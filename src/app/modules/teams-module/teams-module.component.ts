import { TeamsInterface } from './../../extra/TeamsInterface';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireFunctions } from 'angularfire2/functions';
import { BoardsService } from './../../services/boards.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-teams-module',
  templateUrl: './teams-module.component.html',
  styleUrls: ['./teams-module.component.css']
})
export class TeamsModuleComponent implements OnInit {

  constructor(
    public boardsService: BoardsService,
    public router: Router,
    public afs: AngularFirestore,
    public auth: AuthServiceService,
    public route: ActivatedRoute,
    public afFunctions: AngularFireFunctions) {
  }

  ngOnInit() {
  }

  selectTeam(teamId: string) {
    console.log({ teamId });
    this.router.navigate(['/', teamId]);
  }

  createNewTeam() {
    this.auth.user$.subscribe(user => {
      const currentUser = user;
      const name = prompt('What is the name of your team?');
      if (name) {
        const uid = currentUser.uid;
        const team = {
          name,
          members: { [uid]: true }
        };
        this.afs.collection<TeamsInterface>('teams').add(team);
      }
    });
  }
  addMember(teamId) {
    swal({
      title: `Add member to`,
      confirmButtonText: 'Invite;',
      text:
        'Type in the email ' +
        'of the user you want to invite',
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      },
    }).then((result) => {

      if (result.value) {
        return this.afFunctions.httpsCallable('getUserByMail')({ mail: result.value })
          .then((functionResult) => {
            const userData = functionResult.data.userData;
          }).catch(function (error) {
            const code = error.code;
            const message = error.message;
            const details = error.details;

            switch (code) {
              case 'auth/user-not-found':
                console.log('user does not exist');
                break;
              default:
              console.log(code);
              console.log(message);
              console.log(details);
                break;
            }
          });
      }
    });
  }

  leaveTeam(teamId: string, ) {
    this.auth.user$.subscribe(user => {
      // get members object, splice members[uid]
      // sondre får lov til å prøve seg på firestore siden magnus kan det allerede og lar sondre lære seg det

      // update members
      this.afs.doc(`teams/${teamId}`).update({ members });
    });

  }
}
