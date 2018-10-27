import { AuthServiceService } from './../../services/auth-service.service';
import { NavbarService } from './../../services/navbar.service';
import { Board } from './../../extra/BoardInterface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { Subscription } from '../../../../node_modules/rxjs';
import 'rxjs/add/operator/share';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit, OnDestroy {

  // boards of the selected team
  $boards: Observable<Board[]>;
  boardCollection: Observable<AngularFirestoreCollection<Board>>;

  $archived: Observable<Board[]>;
  archiveCollection: Observable<AngularFirestoreCollection<Board>>;

  teamId: string;

  loading = true;
  sub: Subscription;

  constructor(public teamsService: TeamsService, public navbarService: NavbarService,
    public route: ActivatedRoute, public afs: AngularFirestore, public router: Router,
    public auth: AuthServiceService,
    private hotkeysService: HotkeysService) {

    this.hotkeysService.add(new Hotkey('n', (event: KeyboardEvent): boolean => {
      this.addBoard();
      return false;
    }));

    this.hotkeysService.add(new Hotkey('ctr+n', (event: KeyboardEvent): boolean => {
      this.teamsService.createNewTeam();
      return false;
    }));


  }

  ngOnInit() {
    this.navbarService.title = null;

    // SELECT TEAM LOGIC
    this.boardCollection = this.route.paramMap.shareReplay(1).map(paramMap => { // subscribing to the teamId parameter
      console.log('router params has been updated', paramMap.get('teamId'));
      this.teamId = paramMap.get('teamId');
      if (!this.teamId) { // if no team is selected => select previous one
        this.teamId = localStorage.getItem('previousSelectedTeam');
        if (!this.teamId) { // if there is no saved team in localStorage => select the first team youre member of
          this.teamsService.$teams.take(1).subscribe(teams => {
            if (teams[0]) {
              console.log('Selecting the first team youre apart of');
              this.teamsService.selectTeam(teams[0].id);
            } else {
              this.loading = false;
              console.log('You are not member of any team');
            }
          });
        } else {
          // You are not member of any team (used to prevent selecting a cached team you just left)
          if (this.teamId !== 'no-team') {
            console.log('Selecting team from localstorage');
            this.teamsService.selectTeam(this.teamId);
          } else {
            console.log('You are not member of any team, no-team was saved in localstorage');
            this.loading = false;
          }
        }
      } else {
        console.log('Team in url is selected', this.teamId);
        return this.afs.collection<Board>('teams/' + this.teamId + '/boards');
      }
    });

    this.$boards = this.boardCollection.filter(collection => collection !== undefined)
      .switchMap(collection => collection.snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Board;
          data.id = a.payload.doc.id;
          if (data.aggregatedData) {
            const totalEntries = data.aggregatedData.todo + data.aggregatedData.inProgress + data.aggregatedData.done;
            data.aggregatedDataPercent = {
              todo: data.aggregatedData.todo / totalEntries * 100,
              inProgress: data.aggregatedData.inProgress / totalEntries * 100,
              done: data.aggregatedData.done / totalEntries * 100,
              totalEntries
            };

          }
          return data;
        });
      }));

    this.archiveCollection = this.route.paramMap.map(paramMap =>
      this.afs.collection<Board>('teams/' + paramMap.get('teamId') + '/archived'));
    this.$archived = this.archiveCollection.filter(collection => collection !== undefined)
      .switchMap(collection => collection.snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Board;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    if (!localStorage.getItem('firstTime')) {
      swal({
        title: 'Dear user!',
        // tslint:disable-next-line:max-line-length
        html: '<p>This website is still in <strong>Beta</strong>! You may therefore find it incomplete and/or "buggy". We would love to get some feedback from you of some of your thoughts on improvement.<br><br>Please send in feedback by clicking on your profile picture and then "Send feedback"<br><br><strong>Thanks!</strong></p>',
        type: 'info',
      }).then((result) => {
        if (result.value || result.dismiss === swal.DismissReason.cancel) {
          localStorage.setItem('firstTime', 'false');
        }
      });
    }
    this.sub = this.$boards.take(1).subscribe(() => this.loading = false);
  }

  async addBoard() {
    const { value: name } = await swal({
      title: 'What is the name of your project?',
      input: 'text',
      reverseButtons: true,
      inputPlaceholder: 'Project name',
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (name) {
      this.boardCollection.take(1).subscribe(collection => {
        collection.add({ name, aggregatedData: { todo: 0, inProgress: 0, done: 0 } });
      });
      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'Project management',
        eventAction: 'New project',
      });
    }
  }

  archive(board: Board) {
    swal({
      title: 'Are you sure?',
      text: 'This will archive your project. Shared public links wont work anymore. You can of course reactivate at any time.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Archive!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Archive method here
        this.archiveCollection.take(1).subscribe(collection => collection
          .add({ name: board.name, aggregatedData: { todo: 0, inProgress: 0, done: 0 } }));
        this.boardCollection.take(1).subscribe(collection => collection.doc(board.id).delete());
        swal(
          'Archived!',
          'Your project has been archived. You can find it in the archived section below.',
          'success'
        );
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'Project management',
          eventAction: 'Archive project',
        });
      }
    });
  }

  activate(board: Board) {
    swal({
      title: 'Are you sure?',
      text: 'This will reactivate your project.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Activate!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // TODO Activate method here
        this.archiveCollection.take(1).subscribe(collection => collection.doc(board.id).delete());
        this.boardCollection.take(1).subscribe(collection => collection.add(
          { name: board.name, aggregatedData: { todo: 0, inProgress: 0, done: 0 } }));
        swal(
          'Archived!',
          'Your project has been reactivated.',
          'success'
        );
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'Project management',
          eventAction: 'Reactivate project',
        });
      }
    });
  }

  delete(board: Board) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete your project permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method
        this.boardCollection.take(1).subscribe(collection => collection.doc(board.id).delete());

        swal(
          'Deleted!',
          'Your project has been deleted.',
          'success'
        );
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'Project management',
          eventAction: 'Delete project',
        });
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Cancelled',
          'Your project is safe',
          'error'
        );
      }
    });
  }
  deleteArchived(board: Board) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete your project permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method
        this.archiveCollection.take(1).subscribe(collection => collection.doc(board.id).delete());

        swal(
          'Deleted!',
          'Your project has been deleted.',
          'success'
        );
        // Google analytics event
        (<any>window).ga('send', 'event', {
          eventCategory: 'Project management',
          eventAction: 'Delete archived project',
        });
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Cancelled',
          'Your project is safe',
          'error'
        );
      }
    });
  }

  async edit(board: Board) {
    const { value: updatedName } = await swal({
      title: 'Update the project name',
      input: 'text',
      inputValue: board.name,
      showCancelButton: true,
      onOpen: function () {
        const input = (<HTMLInputElement>swal.getInput());
        input.setSelectionRange(0, input.value.length);
      },
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (updatedName) {
      this.boardCollection.take(1).subscribe(collection => collection.doc(board.id).update({
        name: updatedName
      }));
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
