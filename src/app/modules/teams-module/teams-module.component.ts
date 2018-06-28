import { TeamsInterface } from './../../extra/TeamsInterface';
import { AngularFirestore } from 'angularfire2/firestore';
import { BoardsService } from './../../services/boards.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-module',
  templateUrl: './teams-module.component.html',
  styleUrls: ['./teams-module.component.css']
})
export class TeamsModuleComponent implements OnInit {

  constructor(public boardsService: BoardsService, public router: Router, public afs: AngularFirestore, public auth: AuthServiceService) {

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
      const uid = currentUser.uid;
      const team = {
        name,
        members: {[uid]: true}
      };
      this.afs.collection<TeamsInterface>('teams').add(team);
    });
  }

}

interface UserInterface {
  teams: Array<string>;
}
