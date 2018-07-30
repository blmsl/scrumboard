import { TeamsInterface } from './../../extra/TeamsInterface';
import { AngularFirestore } from 'angularfire2/firestore';
import { BoardsService } from './../../services/boards.service';
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
    public boardsService: BoardsService,
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

  async createNewTeam() {
    this.auth.user$.take(1).subscribe(async user => {
      const currentUser = user;
      const { value: name } = await swal({
        title: 'What is the name of the team?',
        input: 'text',
        inputPlaceholder: 'Teamname',
        showCancelButton: true,
        reverseButtons: true,
        inputValidator: (value) => {
          return !value && 'You need to create a teamname!';
        }
      });
      if (name) {
        const uid = currentUser.uid;
        const team = {
          name,
          members: { [uid]: {
            name: user.displayName,
            isMember: true,
            isAdmin: true,
            imgUrl: user.photoURL,
          } }
        };
        this.afs.collection<TeamsInterface>('teams').add(team);
      }
    });
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
