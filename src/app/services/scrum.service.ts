import { NavbarService } from './navbar.service';
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

  boardDocref$: Observable<AngularFirestoreDocument<Board>>;
  boardDoc$: Observable<Board>;

  isPublic = false; // used for the make public link swal popup

  $orderBy: BehaviorSubject<string>;
  sortBy = '{"field": "txt", "direction": "asc"}';

  todoCollection$: Observable<AngularFirestoreCollection<EntryInterface>>;
  inProgressCollection$: Observable<AngularFirestoreCollection<EntryInterface>>;
  doneCollection$: Observable<AngularFirestoreCollection<EntryInterface>>;

  $todo: Observable<EntryInterface[]>;
  $inProgress: Observable<EntryInterface[]>;
  $done: Observable<EntryInterface[]>;

  constructor(public route: ActivatedRoute, public afs: AngularFirestore, public navbarService: NavbarService) {
    this.scrumId$ = this.route.firstChild.params.map(paramMap => paramMap.id);
    this.teamId$ = this.route.firstChild.params.map(paramMap => paramMap.teamId);

    this.boardDocref$ = combineLatest(this.scrumId$, this.teamId$).map(([scrumId, teamId]) => {
      return afs.doc<Board>('teams/' + teamId + '/boards/' + scrumId);
    });
    this.boardDoc$ = this.boardDocref$.switchMap(boardDoc => boardDoc.valueChanges());
    this.boardDoc$.subscribe(board => {
      console.log(board, board.isPublic);
      this.isPublic = board.isPublic;
    });

    // set the orderBy to default TODO save and retrieve from localStorage
    if (localStorage.orderBy) {
      this.sortBy = localStorage.orderBy;
    }
    this.$orderBy = new BehaviorSubject<string>(this.sortBy);

    this.todoCollection$ = this.boardDocref$.map(boardDoc => boardDoc.collection<EntryInterface>('todo'));
    this.inProgressCollection$ = this.boardDocref$.map(boardDoc => boardDoc.collection<EntryInterface>('inProgress'));
    this.doneCollection$ = this.boardDocref$.map(boardDoc => boardDoc.collection<EntryInterface>('done'));

    this.$todo = combineLatest(this.$orderBy, this.boardDocref$).switchMap(([sortBy, boardDoc]) => {
      const config = JSON.parse(sortBy);
      return this.toMap(boardDoc
        .collection<EntryInterface>('todo', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.$inProgress = combineLatest(this.$orderBy, this.boardDocref$).switchMap(([sortBy, boardDoc]) => {
      const config = JSON.parse(sortBy);
      return this.toMap(boardDoc
        .collection<EntryInterface>('inProgress', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.$done = combineLatest(this.$orderBy, this.boardDocref$).switchMap(([sortBy, boardDoc]) => {
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
