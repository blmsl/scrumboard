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

  constructor(public boardsService: BoardsService, public router: Router) {

  }

  ngOnInit() {
  }

  selectTeam(teamId: string) {
    console.log({teamId});
    this.router.navigate(['/', teamId]);
  }


}

interface UserInterface {
  teams: Array<string>;
}
