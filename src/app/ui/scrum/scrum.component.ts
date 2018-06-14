import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css']
})
export class ScrumComponent implements OnInit {

  key: string;

  constructor(
    public route: ActivatedRoute,
    public boardsService: BoardsService
  ) {
    this.key = this.route.snapshot.paramMap.get('key');
  }

  ngOnInit() {

  }

  add() {
    this.boardsService.boardCollection.doc(this.key).collection('todo').add({
      name: prompt('What is the name of the board?')
    });
  }

}
