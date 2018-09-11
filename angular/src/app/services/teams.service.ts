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
import { AngularFireStorage } from 'angularfire2/storage';
import { startWith } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';
import { getImgUrlFromRef } from '../extra/shared';

@Injectable()
export class TeamsService {

  // all teams user is a member of
  teamsCollection: Observable<AngularFirestoreCollection<TeamsInterface>>;
  $teams: Observable<TeamsInterface[]>;

  constructor(public afs: AngularFirestore, public auth: AuthServiceService, public router: Router,
    private storage: AngularFireStorage) {

    this.teamsCollection = this.auth.user$.filter(user => user != null)
      .map(user => this.afs.collection<TeamsInterface>('teams', ref => ref.where('members.' + user.uid + '.isMember', '==', true)))
      .shareReplay(1);
    this.$teams = this.teamsCollection.switchMap(collection => collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as TeamsInterface;
        data.id = a.payload.doc.id;
        getImgUrlFromRef(data, storage);
        return data;
      });
    }));

  }

  selectTeam(teamId: string) {
    localStorage.setItem('previousSelectedTeam', teamId);
    this.router.navigate(['/', teamId]);
  }

  createNewTeam() {
    console.log('Creating a new team');
    this.auth.user$.take(1).subscribe(async user => {
      const currentUser = user;
      const { value: name } = await swal({
        title: 'What is the name of the team?',
        input: 'text',
        inputPlaceholder: 'Team name',
        showCancelButton: true,
        reverseButtons: true,
        inputValidator: (value) => {
          return !value && 'You need to create a team name!';
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

        const val = await this.afs.collection<TeamsInterface>('teams').add(team);
        val.get().then(doc => {
          console.log(doc.data);
          this.selectTeam(doc.id);
        });
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'Team management',
          eventAction: 'New team',
        });
      }
    });
  }

}
