import { NavbarService } from './../../services/navbar.service';
import { Board } from './../../extra/BoardInterface';
import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
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
    public route: ActivatedRoute, public afs: AngularFirestore) {
  }

  ngOnInit() {
    this.navbarService.title = 'Magson Scrum';

    this.boardCollection =  this.route.paramMap.map(paramMap => { // subscribing to the teamId parameter
      const teamId = paramMap.get('teamId');
      this.teamId = teamId;
      console.log({ teamId });
      return this.afs.collection<Board>('teams/' + teamId + '/boards');
    });

    this.$boards = this.boardCollection.switchMap(collection => collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Board;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  async addBoard() {
    const { value: name } = await swal({
      title: 'What is the name of your project?',
      input: 'text',
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
        // Read more about handling dismissals
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


}
