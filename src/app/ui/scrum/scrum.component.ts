import { Board } from './../../extra/BoardInterface';
import { NavbarComponent } from './../navbar/navbar.component';
import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import 'rxjs/add/operator/switchMap';
import swal from 'sweetalert2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css']
})

export class ScrumComponent implements OnInit, OnDestroy {

  id: string;

  todoCollection: AngularFirestoreCollection<EntryInterface>;
  inProgressCollection: AngularFirestoreCollection<EntryInterface>;
  doneCollection: AngularFirestoreCollection<EntryInterface>;

  $todo: Observable<EntryInterface[]>;
  $inProgress: Observable<EntryInterface[]>;
  $done: Observable<EntryInterface[]>;

  radioDiv = `
  <style>
  .swalRadioBtns {
    position: absolute;
    visibility: hidden;
    display: none;
    background-color: #332f35;
  }

  .swalRadioBtnsLabel {
    color: var(--button-color);
    cursor: pointer;
    font-weight: bold;
    padding: 5px 20px;
    float: left;
    outline: 0;
  }

  .swalRadioBtns:checked+.swalRadioBtnsLabel {
    color: white;
    background: var(--button-color);
  }

  .swalRadioBtnsLabel+.swalRadioBtns+.swalRadioBtnsLabel {
    border-left: solid 3px var(--button-color);
  }

  .radio-group {
    border: solid 3px var(--button-color);
    display: inline-block;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
  }
  </style>
  <div class="radio-group">
  <input class="swalRadioBtns" type="radio" id="option-one" name="selector" value="!" checked>
  <label class="swalRadioBtnsLabel" for="option-one">!</label>
  <input class="swalRadioBtns" type="radio" id="option-two" name="selector" value="!!">
  <label class="swalRadioBtnsLabel" for="option-two">!!</label>
  <input class="swalRadioBtns" type="radio" id="option-three" name="selector" value="!!!">
  <label class="swalRadioBtnsLabel" for="option-three">!!!</label>
  </div>`;

  sortBy = 'txt';
  $orderBy: BehaviorSubject<string>;

  constructor(public route: ActivatedRoute,
    public boardsService: BoardsService,
    public auth: AuthServiceService,
    public navbarService: NavbarService) {
    this.id = this.route.snapshot.paramMap.get('id');

    boardsService.boardCollection.doc<Board>(this.id).valueChanges().subscribe((board) => {
      navbarService.title = board.name;
    });

    // set the orderBy to default TODO save and retrieve from localStorage
    if (localStorage.orderBy) {
      this.sortBy = localStorage.orderBy;
    }
    console.log('sending orderBy:', this.sortBy);
    this.$orderBy = new BehaviorSubject<string>(this.sortBy);

    this.todoCollection = boardsService.boardCollection.doc(this.id)
      .collection<EntryInterface>('todo');
    this.inProgressCollection = boardsService.boardCollection.doc(this.id)
      .collection<EntryInterface>('inProgress');
    this.doneCollection = boardsService.boardCollection.doc(this.id)
      .collection<EntryInterface>('done');

    console.log('sub');
    this.$todo = this.$orderBy.switchMap(sortBy => {
      let direction;
      if (sortBy === 'priority') {
        direction = 'desc';
      } else {
        direction = 'asc';
      }
      return this.toMap(boardsService.boardCollection.doc(this.id)
        .collection<EntryInterface>('todo', ref => ref.orderBy(sortBy, direction)).snapshotChanges());
    });

    this.$inProgress = this.$orderBy.switchMap(sortBy => {
      console.log('$orderBy has new value', sortBy);
      let direction;
      if (sortBy === 'priority') {
        direction = 'desc';
      } else {
        direction = 'asc';
      }
      return this.toMap(boardsService.boardCollection.doc(this.id)
        .collection<EntryInterface>('inProgress', ref => ref.orderBy(sortBy, direction)).snapshotChanges());
    });

    this.$done = this.$orderBy.switchMap(sortBy => {
      let direction;
      if (sortBy === 'priority') {
        direction = 'desc';
      } else {
        direction = 'asc';
      }
      return this.toMap(boardsService.boardCollection.doc(this.id)
        .collection<EntryInterface>('done', ref => ref.orderBy(sortBy, direction)).snapshotChanges());
    });



  }

  delete(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete this task permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        collection.doc(entry.id).delete().then();
        swal(
          'Deleted!',
          'The task has been deleted.',
          'success'
        );
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Cancelled',
          'This task is safe',
          'error'
        );
      }
    });
  }

  rollback_from_inprogress(entry: EntryInterface) {
    // Delete from in-progress
    this.inProgressCollection.doc(entry.id).delete();
    // Add to To-do
    this.todoCollection.add({ txt: entry.txt, priority: entry.priority });
  }

  rollback_from_finished(entry: EntryInterface) {
    // Delete from finished
    this.doneCollection.doc(entry.id).delete();
    // add it to inProgress
    this.auth.user$.subscribe((user) => {
      this.inProgressCollection.add({ txt: entry.txt, priority: entry.priority, developer: user.displayName });
    });
  }

  async edit(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    const { value: post } = await swal({
      title: 'Edit the post',
      html:
        `<input id="swal-input1" type="text" value="${entry.txt}" class="swal2-input">` +
        this.radioDiv,
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

  moveToProgress(entry: EntryInterface) {
    // delete from todo
    this.todoCollection.doc(entry.id).delete();
    // add it to inProgress
    this.auth.user$.subscribe((user) => {
      this.inProgressCollection.add({ txt: entry.txt, priority: entry.priority, developer: user.displayName });
    });
  }

  moveToFinished(entry: EntryInterface) {
    // delete from inProgress
    this.inProgressCollection.doc(entry.id).delete();
    // add to done
    this.auth.user$.subscribe((user) => {
      this.doneCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName
      });
    });

  }

  ngOnInit() {
    this.navbarService.backBtn = true;
  }

  sortChanged() {
    this.$orderBy.next(this.sortBy);
    localStorage.orderBy = this.sortBy;
  }

  ngOnDestroy() {
    this.navbarService.backBtn = false;
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

  async add() {
    const { value: post } = await swal({
      title: 'What is the name of the task?',
      html:
        '<input id="swal-input1" type="text" placeholder="Task description" class="swal2-input">' +
        this.radioDiv,
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
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (post) {
      this.todoCollection.add({ txt: post[0], priority: post[1], time: firebase.firestore.FieldValue.serverTimestamp() });
    }

  }
}

export interface EntryInterface {
  txt: string;
  priority: string;
  time?: firebase.firestore.FieldValue;
  developer?: string;
  id?: string;
}
