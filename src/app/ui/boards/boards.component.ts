import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

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
    console.log('add new baord');
    const name = prompt('What is the name of the board?');
    if  (name) { // check that it conatains a name
      this.boardsService.boardCollection.add({ name });
    }
  }

}
