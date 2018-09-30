import { ScrumService } from './../../../services/scrum.service';
import { AuthServiceService } from './../../../services/auth-service.service';
import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { EntryInterface } from '../../../extra/EntryInterface';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { toMap } from '../../../extra/shared';
import { firestore } from 'firebase/app';
import swal from 'sweetalert2';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ThreadComponent } from '../../../modules/thread/thread.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  @Input() scrumService: ScrumService;

  loadingSub: Subscription;

  sortBy = '{"field": "time", "direction": "desc"}';
  $orderBy: BehaviorSubject<string>;

  constructor(public auth: AuthServiceService, public dialog: MatDialog) {
    // set the orderBy to default TODO save and retrieve from localStorage
    if (localStorage.orderBy) {
      this.sortBy = localStorage.orderBy;
    }
    this.$orderBy = new BehaviorSubject<string>(this.sortBy);

    this.scrumService.todoCollection = this.scrumService.boardDoc
      .collection<EntryInterface>('todo');
    this.scrumService.inProgressCollection = this.scrumService.boardDoc
      .collection<EntryInterface>('inProgress');
    this.scrumService.doneCollection = this.scrumService.boardDoc
      .collection<EntryInterface>('done');

    this.scrumService.$todo = this.$orderBy.switchMap(sortBy => {
      const config = JSON.parse(sortBy);
      return toMap(this.scrumService.boardDoc
        .collection<EntryInterface>('todo', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.scrumService.$inProgress = this.$orderBy.switchMap(sortBy => {
      const config = JSON.parse(sortBy);
      return toMap(this.scrumService.boardDoc
        .collection<EntryInterface>('inProgress', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.scrumService.$done = this.$orderBy.switchMap(sortBy => {
      const config = JSON.parse(sortBy);
      return toMap(this.scrumService.boardDoc
        .collection<EntryInterface>('done', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });


    this.loadingSub = combineLatest(this.scrumService.$todo, this.scrumService.$inProgress, this.scrumService.$done)
      .subscribe(([_1, _2, _3]) => this.scrumService.loading = false);

  }

  openThread(entry: EntryInterface) {
    const dialogRef = this.dialog.open(ThreadComponent, {
      data: entry,
      // position: {
      //   bottom: '0px'
      // }
    });
  }


  async edit(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    const { value: post } = await swal({
      title: 'Edit',
      html:
        `<input id="swal-input1" type="text" value='${entry.txt}' class="swal2-input">` +
        this.scrumService.getRadio(entry.priority),
      showCancelButton: true,
      reverseButtons: true,
      preConfirm: () => {
        let priority: string;

        if ((<HTMLInputElement>document.getElementById('option-one')).checked) {
          priority = '!';
        } else if ((<HTMLInputElement>document.getElementById('option-two')).checked) {
          priority = '!!';
        } else if ((<HTMLInputElement>document.getElementById('option-three')).checked) {
          priority = '!!!';
        }
        return [
          (<HTMLInputElement>document.getElementById('swal-input1')).value,
          priority
        ];
      },
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (post) {
      collection.doc(entry.id).update({
        txt: post[0],
        priority: post[1]
      });
    }
  }

  rollback_from_inprogress(entry: EntryInterface) {
    // Delete from in-progress
    this.scrumService.inProgressCollection.doc(entry.id).delete();
    // Add to To-do
    this.scrumService.todoCollection.add({
      txt: entry.txt, priority: entry.priority, time: firestore.FieldValue.serverTimestamp()
    });
  }

  rollback_from_finished(entry: EntryInterface) {
    // Delete from finished
    this.scrumService.doneCollection.doc(entry.id).delete();
    // add it to inProgress
    this.auth.user$.take(1).subscribe((user) => {
      this.scrumService.inProgressCollection.add({
        txt: entry.txt,
        priority: entry.priority,
        developer: user.displayName,
        time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      });
    });
  }

  moveToProgress(entry: EntryInterface) {
    // delete from todo
    this.scrumService.todoCollection.doc(entry.id).delete();
    // add it to inProgress
    this.auth.user$.take(1).subscribe((user) => {
      this.scrumService.inProgressCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      });
    });
  }

  moveToFinished(entry: EntryInterface) {
    // delete from inProgress
    this.scrumService.inProgressCollection.doc(entry.id).delete();
    // add to done
    this.auth.user$.take(1).subscribe((user) => {
      this.scrumService.doneCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      });
    });
  }

  sortChanged() {
    this.$orderBy.next(this.sortBy);
    localStorage.orderBy = this.sortBy;
  }


  async add() {
    const { value: post } = await swal({
      title: 'What is the name of the task?',
      html:
        '<input id="swal-input1" type="text" placeholder="Task description" class="swal2-input">' +
        this.scrumService.getRadio('!'),
      reverseButtons: true,
      showCancelButton: true,
      preConfirm: () => {
        let priority: string;

        if ((<HTMLInputElement>document.getElementById('option-one')).checked) {
          priority = '!';
        } else if ((<HTMLInputElement>document.getElementById('option-two')).checked) {
          priority = '!!';
        } else if ((<HTMLInputElement>document.getElementById('option-three')).checked) {
          priority = '!!!';
        }
        return [
          (<HTMLInputElement>document.getElementById('swal-input1')).value,
          priority
        ];
      },
    });
    if (post[0] !== '') {
      this.scrumService.todoCollection.add({ txt: post[0], priority: post[1], time: firestore.FieldValue.serverTimestamp() });
      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'Scrumboard interaction',
        eventAction: 'New todo',
      });
    } else if (post[0] === '') {
      swal({
        title: 'Invalid task.',
        type: 'error',
        text: 'Please fill in a task description!'
      });
    }
  }

  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }

  ngOnInit() {
  }





}
