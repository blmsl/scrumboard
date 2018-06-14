import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class BoardsService {

  boardsCollection: Observable<AngularFirestoreCollection
  boards: Observable<any[]>;

  constructor() { }

}
