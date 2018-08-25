import { EntryInterface } from './../../extra/EntryInterface';
import { TeamsService } from './../../services/teams.service';
import { Board } from './../../extra/BoardInterface';
import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, DocumentChangeAction, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import 'rxjs/add/operator/switchMap';
import swal from 'sweetalert2';
import { firestore } from 'firebase/app';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css'],
  animations: [

    trigger('entriesAnim', [

      transition('void => in', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),

      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])

    ]),
  ]

})


export class ScrumComponent implements OnInit, OnDestroy, AfterViewInit {

  id: string;
  teamId: string;

  boardDoc: AngularFirestoreDocument<Board>;

  isPublic = false; // used for the make public link swal popup
  shareableLink: string;

  todoCollection: AngularFirestoreCollection<EntryInterface>;
  inProgressCollection: AngularFirestoreCollection<EntryInterface>;
  doneCollection: AngularFirestoreCollection<EntryInterface>;

  $todo: Observable<EntryInterface[]>;
  $inProgress: Observable<EntryInterface[]>;
  $done: Observable<EntryInterface[]>;

  sortBy = '{"field": "txt", "direction": "asc"}';
  $orderBy: BehaviorSubject<string>;

  sub: Subscription;
  navTab = 'todo';

  loading = true;
  loadingSub: Subscription;

  disableAnimations: boolean;

  ngAfterViewInit(): void {
    this.disableAnimations = true;
  }

  constructor(public route: ActivatedRoute,
    public teamsService: TeamsService,
    public auth: AuthServiceService,
    public snackBar: MatSnackBar,
    public navbarService: NavbarService,
    public afs: AngularFirestore) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.teamId = this.route.snapshot.paramMap.get('teamId');
    this.shareableLink = 'https://scrum.magson.no/scrum/' + this.teamId + '/' + this.id;

    this.boardDoc = afs.doc<Board>('teams/' + this.teamId + '/boards/' + this.id);
    this.sub = this.boardDoc.valueChanges().subscribe(board => {
      this.isPublic = board.isPublic;
      navbarService.title = board.name;
    });

    // set the orderBy to default TODO save and retrieve from localStorage
    if (localStorage.orderBy) {
      this.sortBy = localStorage.orderBy;
    }
    this.$orderBy = new BehaviorSubject<string>(this.sortBy);

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

    this.loadingSub = combineLatest(this.$todo, this.$inProgress, this.$done)
      .subscribe(([_1, _2, _3]) => this.loading = false);

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
        collection.doc(entry.id).delete().then(() => {
          const snack = this.snackBar.open('Entry was deleted', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            collection.add(entry);
          });

          // Google analytics event
          (<any>window).ga('send', 'event', {
            eventCategory: 'Scrumboard interaction',
            eventAction: 'Delete task',
          });
        });
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
    this.todoCollection.add({
      txt: entry.txt, priority: entry.priority, time: firestore.FieldValue.serverTimestamp()
    });
  }

  rollback_from_finished(entry: EntryInterface) {
    // Delete from finished
    this.doneCollection.doc(entry.id).delete();
    // add it to inProgress
    this.auth.user$.take(1).subscribe((user) => {
      this.inProgressCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      });
    });
  }

  async edit(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
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
    this.auth.user$.take(1).subscribe((user) => {
      this.inProgressCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
      });
    });
  }

  moveToFinished(entry: EntryInterface) {
    // delete from inProgress
    this.inProgressCollection.doc(entry.id).delete();
    // add to done
    this.auth.user$.take(1).subscribe((user) => {
      this.doneCollection.add({
        txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
        imgUrl: user.photoURL
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

    this.sub.unsubscribe();
    this.loadingSub.unsubscribe();
  }


  uploadBoardVisibility(val) {
    console.log(this.isPublic, val);
    this.boardDoc.update({
      isPublic: val.checked
    });
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
      this.todoCollection.add({ txt: post[0], priority: post[1], time: firestore.FieldValue.serverTimestamp() });
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

  identify(idx, item: EntryInterface) {
    return item.id;
  }

  copyLinkTxt() {
    const copyText = <HTMLInputElement>document.getElementById('shareableLinkInp');
    copyText.select();
    document.execCommand('copy');
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

