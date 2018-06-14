import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Board } from '../extra/BoardInterface';

@Injectable()
export class BoardsService {

  boardsCollection: AngularFirestoreCollection<Board>;
  boards: Observable<Board[]>;

  constructor(public afs: AngularFirestore) {

    this.boardsCollection = afs.collection('boards');
  }

}
