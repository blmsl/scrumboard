import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-teams-module',
  templateUrl: './teams-module.component.html',
  styleUrls: ['./teams-module.component.css']
})
export class TeamsModuleComponent implements OnInit {

  teamsDoc: Observable<AngularFirestoreDocument<UserInterface>>; // all teams user is a member of
  $teams: Observable<UserInterface>;

  constructor(auth: AuthServiceService, afs: AngularFirestore) {
    this.teamsDoc = auth.user$.filter(user => user != null)
    .map(user => afs.doc<UserInterface>('users/' + user.uid))
    .shareReplay(1);

    this.$teams = this.teamsDoc.switchMap(collection => collection.valueChanges());
    this.$teams.subscribe((teams) => console.log(teams));
  }

  ngOnInit() {
  }

}

interface UserInterface {
  teams: Array<string>;
}
