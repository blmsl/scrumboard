import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/shareReplay';
import { TeamsInterface } from '../extra/TeamsInterface';
import swal from 'sweetalert2';
import { Router } from '../../../node_modules/@angular/router';


@Injectable()
export class TeamsService {

  // all teams user is a member of
  teamsCollection: Observable<AngularFirestoreCollection<TeamsInterface>>;
  $teams: Observable<TeamsInterface[]>;

  constructor(public afs: AngularFirestore, public auth: AuthServiceService, public router: Router) {

    this.teamsCollection = this.auth.user$.filter(user => user != null)
      .map(user => this.afs.collection<TeamsInterface>('teams', ref => ref.where('members.' + user.uid + '.isMember', '==', true)))
      .shareReplay(1);
    this.$teams = this.teamsCollection.switchMap(collection => collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as TeamsInterface;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

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
          members: {
            [uid]: {
              name: user.displayName,
              isMember: true,
              isAdmin: true,
              imgUrl: user.photoURL,
            }
          }
        };
        this.afs.collection<TeamsInterface>('teams').add(team).then((val) => this.router.navigate(['/', val.id]));
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'Team management',
          eventAction: 'New team',
        });
      }
    });
  }

}
