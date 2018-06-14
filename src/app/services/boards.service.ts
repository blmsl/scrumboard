import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Board } from '../extra/BoardInterface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BoardsService {

  $boards: Observable<Board[]>;
  boardCollection: AngularFirestoreCollection<Board>;

  constructor(afs: AngularFirestore) {

    this.boardCollection = afs.collection<Board>('boards');

    this.$boards = afs.collection<Board>('boards').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Board;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

}
