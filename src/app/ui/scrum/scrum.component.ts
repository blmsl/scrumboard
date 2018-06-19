import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css']
})

export class ScrumComponent implements OnInit {


  id: string;

  todoCollection: AngularFirestoreCollection<EntryInterface>;
  inProgressCollection: AngularFirestoreCollection<EntryInterface>;
  doneCollection: AngularFirestoreCollection<EntryInterface>;

  $todo: Observable<EntryInterface[]>;
  $inProgress: Observable<EntryInterface[]>;
  $done: Observable<EntryInterface[]>;

  constructor(public route: ActivatedRoute,
    public boardsService: BoardsService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log({ key: this.id });

    this.todoCollection = boardsService.boardCollection.doc(this.id)
      .collection<EntryInterface>('todo');
    this.inProgressCollection = boardsService.boardCollection.doc(this.id)
      .collection<EntryInterface>('inProgress');
    this.doneCollection = boardsService.boardCollection.doc(this.id)
      .collection<EntryInterface>('done');

    this.$todo = this.toMap(this.todoCollection
      .snapshotChanges());

    this.$inProgress = this.toMap(this.inProgressCollection
      .snapshotChanges());

    this.$done = this.toMap(this.doneCollection
      .snapshotChanges());

  }

  moveToProgress(entry: EntryInterface) {
    // delete from todo
    this.todoCollection.doc(entry.id).delete();
    // TODO add it to inProgress
    this.inProgressCollection.add({ txt: entry.txt, developer: 'Sondre' });
  }

  ngOnInit() {

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

  add() {
    const txt = prompt('What is the name of the task?');
    if (txt) {
      this.todoCollection.add({ txt });
    }
  }
}

export interface EntryInterface {
  txt: string;
  developer?: string;
  id?: string;
}
