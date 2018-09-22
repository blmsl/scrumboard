import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { EntryInterface } from '../../../extra/EntryInterface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  todoCollection: AngularFirestoreCollection<EntryInterface>;
  inProgressCollection: AngularFirestoreCollection<EntryInterface>;
  doneCollection: AngularFirestoreCollection<EntryInterface>;

  $todo: Observable<EntryInterface[]>;
  $inProgress: Observable<EntryInterface[]>;
  $done: Observable<EntryInterface[]>;

  constructor() {
    this.todoCollection = this.boardDoc
      .collection<EntryInterface>('todo');
    this.inProgressCollection = this.boardDoc
      .collection<EntryInterface>('inProgress');
    this.doneCollection = this.boardDoc
      .collection<EntryInterface>('done');

    this.$todo = this.$orderBy.switchMap(sortBy => {
      const config = JSON.parse(sortBy);
      return this.toMap(this.boardDoc
        .collection<EntryInterface>('todo', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.$inProgress = this.$orderBy.switchMap(sortBy => {
      const config = JSON.parse(sortBy);
      return this.toMap(this.boardDoc
        .collection<EntryInterface>('inProgress', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.$done = this.$orderBy.switchMap(sortBy => {
      const config = JSON.parse(sortBy);
      return this.toMap(this.boardDoc
        .collection<EntryInterface>('done', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

   }

  ngOnInit() {
  }

}
