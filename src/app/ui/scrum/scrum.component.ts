import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import 'rxjs/add/operator/switchMap';

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
    public boardsService: BoardsService,
    public auth: AuthServiceService) {
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

  delete(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    if (confirm('Are you sure you want to delete this entry?')) {
      collection.doc(entry.id).delete().then();
    }
  }

  edit(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    const editTxt = prompt('Edit the text of the entry', entry.txt);
    if (editTxt) {
      collection.doc(entry.id).update({
        txt: editTxt
      });
    }
  }

  moveToProgress(entry: EntryInterface) {
    // delete from todo
    this.todoCollection.doc(entry.id).delete();
    // add it to inProgress
    this.auth.user$.subscribe((user) => {
      this.inProgressCollection.add({ txt: entry.txt, developer: user.displayName });
    });
  }

  moveToFinished(entry: EntryInterface) {
    // delete from inProgress
    this.inProgressCollection.doc(entry.id).delete();
    // add to done
    this.auth.user$.subscribe((user) => {
      this.doneCollection.add({
        txt: entry.txt, developer: user.displayName
      });
    });

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
