import { Board } from './../../extra/BoardInterface';
import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor(public boardsService: BoardsService) {

  }

  ngOnInit() {
  }

  addBoard() {
    console.log('add new board');
    const name = prompt('What is the name of the project?');
    if (name) { // check that it conatains a name
      this.boardsService.boardCollection.add({ name });
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
        this.boardsService.boardCollection.doc(board.id).delete();

        swal(
          'Deleted!',
          'Your file has been deleted.',
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

  edit(board: Board) {
    const updatedName = prompt('Update the board name', board.name);
    if (updatedName) {
      this.boardsService.boardCollection.doc(board.id).update({
        name: updatedName
      });
    }
  }


}
