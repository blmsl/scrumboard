import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument,
  DocumentChangeAction, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { firestore } from 'firebase/app';
import { Observable, BehaviorSubject, combineLatest } from '../../../node_modules/rxjs';
import { Board } from '../extra/BoardInterface';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { EntryInterface } from '../extra/EntryInterface';

@Injectable({
  providedIn: 'root'
})
export class ScrumService {

  scrumId$: Observable<string>;
  teamId$: Observable<string>;

  boardDoc$: Observable<AngularFirestoreDocument<Board>>;

  $orderBy: BehaviorSubject<string>;
  sortBy = '{"field": "txt", "direction": "asc"}';

  todoCollection$: Observable<AngularFirestoreCollection<EntryInterface>>;
  inProgressCollection$: Observable<AngularFirestoreCollection<EntryInterface>>;
  doneCollection$: Observable<AngularFirestoreCollection<EntryInterface>>;

  $todo: Observable<EntryInterface[]>;
  $inProgress: Observable<EntryInterface[]>;
  $done: Observable<EntryInterface[]>;

  constructor(public route: ActivatedRoute, public afs: AngularFirestore) {
    this.scrumId$ = this.route.firstChild.params.map(paramMap => paramMap.id);
    this.teamId$ = this.route.firstChild.params.map(paramMap => paramMap.teamId);

    this.boardDoc$ = combineLatest(this.scrumId$, this.teamId$).map(([scrumId, teamId]) => {
      return afs.doc<Board>('teams/' + teamId + '/boards/' + scrumId);
    });

    // set the orderBy to default TODO save and retrieve from localStorage
    if (localStorage.orderBy) {
      this.sortBy = localStorage.orderBy;
    }
    this.$orderBy = new BehaviorSubject<string>(this.sortBy);

    this.todoCollection$ = this.boardDoc$.map(boardDoc => boardDoc.collection<EntryInterface>('todo'));
    this.inProgressCollection$ = this.boardDoc$.map(boardDoc => boardDoc.collection<EntryInterface>('inProgress'));
    this.doneCollection$ = this.boardDoc$.map(boardDoc => boardDoc.collection<EntryInterface>('done'));

    this.$todo = combineLatest(this.$orderBy, this.boardDoc$).switchMap(([sortBy, boardDoc]) => {
      const config = JSON.parse(sortBy);
      return this.toMap(boardDoc
        .collection<EntryInterface>('todo', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.$inProgress = combineLatest(this.$orderBy, this.boardDoc$).switchMap(([sortBy, boardDoc]) => {
      const config = JSON.parse(sortBy);
      return this.toMap(boardDoc
        .collection<EntryInterface>('inProgress', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.$done = combineLatest(this.$orderBy, this.boardDoc$).switchMap(([sortBy, boardDoc]) => {
      const config = JSON.parse(sortBy);
      return this.toMap(boardDoc
        .collection<EntryInterface>('done', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });
  }

  sortChanged() {
    this.$orderBy.next(this.sortBy);
    localStorage.orderBy = this.sortBy;
  }

  toMap(observable: Observable<DocumentChangeAction<EntryInterface>[]>): Observable<EntryInterface[]> {
    return observable.map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as EntryInterface;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }


}


