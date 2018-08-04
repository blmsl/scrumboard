import { ScrumService } from './../../services/scrum.service';
import { Board } from './../../extra/BoardInterface';
import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, DocumentChangeAction, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import 'rxjs/add/operator/switchMap';
import swal from 'sweetalert2';
import { EntryInterface } from '../../extra/EntryInterface';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css']
})

export class ScrumComponent implements OnInit, OnDestroy {

  sub: Subscription;
  navTab = 'todo';

  constructor(public boardsService: TeamsService,
    public auth: AuthServiceService, public scrumService: ScrumService,
    public navbarService: NavbarService, public afs: AngularFirestore) {

    this.sub = this.scrumService.boardDoc$.switchMap(boardDoc => boardDoc.valueChanges()).subscribe((board) => {
      console.log(board);
      this.navbarService.title = board.name;
    });

  }

  delete(entry: EntryInterface, collection$: Observable<AngularFirestoreCollection<EntryInterface>>) {
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
        collection$.take(1).subscribe(collection => collection.doc(entry.id).delete().then(() => {
          swal(
            'Deleted!',
            'The task has been deleted.',
            'success'
          );
          // Google analytics event
          (<any>window).ga('send', 'event', {
            eventCategory: 'Scrumboard interaction',
            eventAction: 'Delete task',
          });
        }));
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
    this.scrumService.inProgressCollection$.take(1).subscribe(inProgressCollection => inProgressCollection.doc(entry.id).delete());
    // Add to To-do
    this.scrumService.todoCollection$.take(1).subscribe(todoCollection => todoCollection.add({
      txt: entry.txt, priority: entry.priority, time: firestore.FieldValue.serverTimestamp()
    }));
  }

  rollback_from_finished(entry: EntryInterface) {
    // Delete from finished
    this.scrumService.doneCollection$.take(1).subscribe(doneCollection => doneCollection.doc(entry.id).delete());
    // add it to inProgress
    this.auth.user$.take(1).subscribe((user) => {
      this.scrumService.inProgressCollection$.take(1).subscribe(inProgressCollection => inProgressCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      }));
    });
  }

  async edit(entry: EntryInterface, collection$: Observable<AngularFirestoreCollection<EntryInterface>>) {
    const { value: post } = await swal({
      title: 'Edit the post',
      html:
        `<input id="swal-input1" type="text" value='${entry.txt}' class="swal2-input">` +
        this.getRadio(entry.priority),
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
      collection$.take(1).subscribe(collection => collection.doc(entry.id).update({
        txt: post[0],
        priority: post[1]
      }));
    }
  }

  moveToProgress(entry: EntryInterface) {
    // delete from todo
    this.scrumService.todoCollection$.take(1).subscribe(todoCollection => todoCollection.doc(entry.id).delete());
    // add it to inProgress
    this.auth.user$.take(1).subscribe((user) => {
      this.scrumService.inProgressCollection$.take(1).subscribe(inProgressCollection => inProgressCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      }));
    });
  }

  moveToFinished(entry: EntryInterface) {
    // delete from inProgress
    this.scrumService.inProgressCollection$.take(1).subscribe(inProgressCollection => inProgressCollection.doc(entry.id).delete());
    // add to done
    this.auth.user$.take(1).subscribe((user) => {
      this.scrumService.doneCollection$.take(1).subscribe(doneCollection => doneCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      }));
    });
  }

  ngOnInit() {
    this.navbarService.backBtn = true;
    this.navbarService.shareLink = true;
  }


  ngOnDestroy() {
    this.navbarService.backBtn = false;
    this.navbarService.shareLink = false;

    this.sub.unsubscribe();
  }

  async add() {
    const { value: post } = await swal({
      title: 'What is the name of the task?',
      html:
        '<input id="swal-input1" type="text" placeholder="Task description" class="swal2-input">' +
        this.getRadio('!'),
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
      this.scrumService.todoCollection$.take(1).subscribe(todoCollection =>
        todoCollection.add({ txt: post[0], priority: post[1], time: firestore.FieldValue.serverTimestamp() }));
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

  getRadio(priority: string) {
    return `
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
  <input class="swalRadioBtns" type="radio" id="option-one" name="selector" value="!" ${this.checkIfChecked(priority, '!')}>
  <label class="swalRadioBtnsLabel" for="option-one">!</label>
  <input class="swalRadioBtns" type="radio" id="option-two" name="selector" value="!!" ${this.checkIfChecked(priority, '!!')}>
  <label class="swalRadioBtnsLabel" for="option-two">!!</label>
  <input class="swalRadioBtns" type="radio" id="option-three" name="selector" value="!!!" ${this.checkIfChecked(priority, '!!!')}>
  <label class="swalRadioBtnsLabel" for="option-three">!!!</label>
  </div>`;
  }

  checkIfChecked(priority: string, x: string) {
    if (priority === x) { return 'checked'; }
    return null;
  }

  sendEvent = (filter: String) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'User settings',
      eventLabel: filter,
      eventAction: 'Change filter',
      eventValue: 10
    });
  }

  async addBug() {
    const { value: post } = await swal({
      title: 'Describe the bug',
      input: 'text',
      reverseButtons: true,
      showCancelButton: true,
    });
    if (post) {
      // add to firebase
      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'Scrumboard interaction',
        eventAction: 'New bug reported',
      });
    }
  }
}

