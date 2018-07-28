import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/shareReplay';
import { TeamsInterface } from '../extra/TeamsInterface';

@Injectable()
export class BoardsService {

  // all teams user is a member of
  teamsCollection: Observable<AngularFirestoreCollection<TeamsInterface>>;
  $teams: Observable<TeamsInterface[]>;

  constructor(afs: AngularFirestore, auth: AuthServiceService) {

    this.teamsCollection = auth.user$.filter(user => user != null)
      .map(user => afs.collection<TeamsInterface>('teams', ref => ref.where('members.' + user.uid + '.isMember', '==', true)))
      .shareReplay(1);
    this.$teams = this.teamsCollection.switchMap(collection => collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as TeamsInterface;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  }

}
