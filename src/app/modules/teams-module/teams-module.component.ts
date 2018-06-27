import { switchMap } from 'rxjs/operators';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/map';
import { TeamsInterface } from '../../extra/TeamsInterface';

@Component({
  selector: 'app-teams-module',
  templateUrl: './teams-module.component.html',
  styleUrls: ['./teams-module.component.css']
})
export class TeamsModuleComponent implements OnInit, OnDestroy {

  teamsCollection: Observable<AngularFirestoreCollection<TeamsInterface>>; // all teams user is a member of
  $teams: Observable<TeamsInterface[]>;

  sub: Subscription;

  constructor(auth: AuthServiceService, afs: AngularFirestore) {

    this.teamsCollection = auth.user$.filter(user => user != null)
      .map(user => afs.collection<TeamsInterface>('teams', ref => ref.where('members.' + user.uid, '==', true)))
      .shareReplay(1);
    this.$teams = this.teamsCollection.switchMap(collection => collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as TeamsInterface;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

interface UserInterface {
  teams: Array<string>;
}
