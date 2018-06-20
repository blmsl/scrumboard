import { NavbarService } from './../../services/navbar.service';
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

  constructor(public boardsService: BoardsService, public navbarService: NavbarService) {

  }

  ngOnInit() {
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

  edit(board: Board) {
    const updatedName = prompt('Update the board name', board.name);
    if (updatedName) {
      this.boardsService.boardCollection.doc(board.id).update({
        name: updatedName
      });
    }
  }


}
