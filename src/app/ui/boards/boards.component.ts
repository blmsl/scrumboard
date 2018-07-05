import { NavbarService } from './../../services/navbar.service';
import { Board } from './../../extra/BoardInterface';
import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  // boards of the selected team
  $boards: Observable<Board[]>;
  boardCollection: Observable<AngularFirestoreCollection<Board>>;

  teamId: string;

  constructor(public boardsService: BoardsService, public navbarService: NavbarService,
    public route: ActivatedRoute, public afs: AngularFirestore, public router: Router) {
    console.log('boards component has been initialized');
  }

  ngOnInit() {
    this.navbarService.title = 'Magson Scrum';

    this.boardCollection = this.route.paramMap.map(paramMap => { // subscribing to the teamId parameter
      const teamId = paramMap.get('teamId');
      this.teamId = teamId;
      if (!this.teamId) { // if no team is selected => select previous one
        console.log('No team is selected in url');
        this.teamId = localStorage.previousSelectedTeam;
        if (!this.teamId) { // if there is no saved team in localStorage => select the first team youre memeber of
          console.log('No team is selected in localStorage');
          this.boardsService.$teams.take(1).subscribe(teams => {
            console.log('select the first team youre memeber of');
            this.selectTeam(teams[0].id);
          });
        } else {
          this.selectTeam(this.teamId);
        }
      } else {
        console.log({ teamId });
        return this.afs.collection<Board>('teams/' + this.teamId + '/boards');
      }
    });

    this.$boards = this.boardCollection.filter(collection => collection !== undefined)
      .switchMap(collection => collection.snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Board;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
      // delete this
      this.$boards.subscribe(boards => {
        console.log(boards);
      });
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
      this.boardCollection.take(1).subscribe(collection => collection.add({ name }));
    }
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
        // Delete method here
        this.boardCollection.take(1).subscribe(collection => collection.doc(board.id).delete());

        swal(
          'Deleted!',
          'Your project has been deleted.',
          'success'
        );
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

  selectTeam(teamId: string) {
    localStorage.previousSelectedTeam = teamId;
    this.router.navigate(['/', teamId]);
  }

}
