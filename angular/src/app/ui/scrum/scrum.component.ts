import { AddScrumEntryComponent } from './../../modules/add-scrum-entry/add-scrum-entry.component';
import { EntryInterface } from './../../extra/EntryInterface';
import { TeamsService } from './../../services/teams.service';
import { Board } from './../../extra/BoardInterface';
import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, DocumentChangeAction, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, Subscription, combineLatest, forkJoin } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import 'rxjs/add/operator/switchMap';
import swal from 'sweetalert2';
import { firestore } from 'firebase/app';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ThreadComponent } from '../../modules/thread/thread.component';
import { TeamsInterface } from '../../extra/TeamsInterface';
import { MapToIterablePipe } from '../../extra/map-to-iterable.pipe';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { merge } from 'rxjs/operators';

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
  isSignedIn = false;
  shareableLink: string;

  swalVar;

  entryCollection: AngularFirestoreCollection<EntryInterface>;

  $todo: Observable<EntryInterface[]>;
  $inProgress: Observable<EntryInterface[]>;
  $done: Observable<EntryInterface[]>;

  bugCollection: AngularFirestoreCollection<EntryInterface>;
  $bugs: Observable<EntryInterface[]>;

  ideaCollection: AngularFirestoreCollection<EntryInterface>;
  $ideas: Observable<EntryInterface[]>;

  noteCollection: AngularFirestoreCollection<EntryInterface>;
  $notes: Observable<EntryInterface[]>;

  client_bugs_collection: AngularFirestoreCollection<EntryInterface>;
  $client_bugs: Observable<EntryInterface[]>;

  client_feature_collection: AngularFirestoreCollection<EntryInterface>;
  $c_features: Observable<EntryInterface[]>;

  client_notes_collection: AngularFirestoreCollection<EntryInterface>;
  $c_notes: Observable<EntryInterface[]>;

  sortBy = '{"field": "priority", "direction": "desc"}';
  $orderBy: BehaviorSubject<string>;

  sub: Subscription;
  navTab = 'todo';
  loading = true;
  loadingSub: Subscription;

  disableAnimations: boolean;

  @ViewChild('linkShareSwal') private linkShareSwal: SwalComponent;

  ngAfterViewInit(): void {
    this.disableAnimations = true;
  }

  constructor(public route: ActivatedRoute,
    public teamsService: TeamsService,
    public auth: AuthServiceService,
    public snackBar: MatSnackBar,
    public navbarService: NavbarService,
    public dialog: MatDialog,
    public afs: AngularFirestore,
    private hotkeysService: HotkeysService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.teamId = this.route.snapshot.paramMap.get('teamId');
    this.shareableLink = 'https://scrum.magson.no/scrum/' + this.teamId + '/' + this.id;

    this.boardDoc = afs.doc<Board>('teams/' + this.teamId + '/boards/' + this.id);
    this.sub = this.boardDoc.valueChanges().subscribe(board => {
      this.isPublic = board.isPublic;
      navbarService.title = board.name;
    });


    // set the orderBy to last used
    if (localStorage.orderBy) {
      this.sortBy = localStorage.orderBy;
    }
    this.$orderBy = new BehaviorSubject<string>(this.sortBy);

    this.entryCollection = this.boardDoc
      .collection<EntryInterface>('entries');

    const $entries = this.$orderBy.switchMap(sortBy => {
      const config = JSON.parse(sortBy);
      return this.toMap(this.boardDoc
        .collection<EntryInterface>('entries', ref => ref.orderBy(config.field, config.direction)).snapshotChanges());
    });

    this.$todo = $entries.map(entrier => entrier.filter(entry => entry.state === 'todo'));
    this.$inProgress = $entries.map(entrier => entrier.filter(entry => entry.state === 'inProgress'));
    this.$done = $entries.map(entrier => entrier.filter(entry => entry.state === 'done'));

    this.bugCollection = this.boardDoc.collection<EntryInterface>('bugs');
    this.$bugs = this.toMap(this.bugCollection.snapshotChanges());

    this.ideaCollection = this.boardDoc.collection<EntryInterface>('ideas');
    this.$ideas = this.toMap(this.ideaCollection.snapshotChanges());

    this.noteCollection = this.boardDoc.collection<EntryInterface>('notes');
    this.$notes = this.toMap(this.noteCollection.snapshotChanges());

    this.client_bugs_collection = this.boardDoc.collection<EntryInterface>('client_bugs');
    this.$client_bugs = this.toMap(this.client_bugs_collection.snapshotChanges());

    this.client_feature_collection = this.boardDoc.collection<EntryInterface>('client_feature_request');
    this.$c_features = this.toMap(this.client_feature_collection.snapshotChanges());

    this.client_notes_collection = this.boardDoc.collection<EntryInterface>('client_notes');
    this.$c_notes = this.toMap(this.client_notes_collection.snapshotChanges());



    this.loadingSub = combineLatest(this.$todo, this.$inProgress, this.$done)
      .subscribe(([_1, _2, _3]) => this.loading = false);

    this.auth.user$.take(1).subscribe((user) => {
      if (user) {
        this.isSignedIn = true;
      }
    });
    this.hotkeysService.add(new Hotkey('n', (event: KeyboardEvent): boolean => {

      switch (this.navTab) {
        case 'todo':
          console.log('todo');
          this.add();
          break;
        case 'bugs':
          console.log('bugs');
          this.addBug();
          break;
        case 'ideas':
          console.log('ideas');
          this.addIdea();
          break;
        case 'notes':
          console.log('notes');
          this.addNote();
          break;
        case 'beta':
          console.log('beta');
          this.add_feedback();
          break;
        default:
          break;
      }

      return false;
    }));
    this.hotkeysService.add(new Hotkey('1', (event: KeyboardEvent): boolean => {
      this.navTab = 'todo';
      return false;
    }));
    this.hotkeysService.add(new Hotkey('2', (event: KeyboardEvent): boolean => {
      this.navTab = 'bugs';
      return false;
    }));
    this.hotkeysService.add(new Hotkey('3', (event: KeyboardEvent): boolean => {
      this.navTab = 'ideas';
      return false;
    }));
    this.hotkeysService.add(new Hotkey('4', (event: KeyboardEvent): boolean => {
      this.navTab = 'notes';
      return false;
    }));
    this.hotkeysService.add(new Hotkey('5', (event: KeyboardEvent): boolean => {
      this.navTab = 'beta';
      return false;
    }));
    this.hotkeysService.add(new Hotkey('6', (event: KeyboardEvent): boolean => {
      this.navTab = 'info';
      return false;
    }));
    this.hotkeysService.add(new Hotkey('ctrl+s', (event: KeyboardEvent): boolean => {
      this.linkShareSwal.show();
      return false;
    }));
  }

  delete(entry: EntryInterface) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete this task permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        this.entryCollection.doc(entry.id).delete().then(() => {
          const snack = this.snackBar.open('Entry was deleted', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            this.entryCollection.add(entry);
          });

          // Google analytics event
          (<any>window).ga('send', 'event', {
            eventCategory: 'Scrumboard interaction',
            eventAction: 'Delete task',
          });
        });
      }
    });
  }

  updateEntryState(entry: EntryInterface, state: 'todo' | 'inProgress' | 'done') {
    if (state === 'inProgress') {
      this.auth.user$.take(1).subscribe((user) => {
        // tslint:disable-next-line:max-line-length
        this.entryCollection.doc(entry.id).update({ state: state, imgUrl: user.photoURL, developer: user.displayName, time: firestore.FieldValue.serverTimestamp() });
      });
    } else {
      this.entryCollection.doc(entry.id).update({ state: state, time: firestore.FieldValue.serverTimestamp() });
    }

  }

  edit(entry: EntryInterface) {
    this.dialog.open(AddScrumEntryComponent, {
      data: { entryCollection: this.entryCollection, entry, teamId: this.teamId },
      // position: {
      //   bottom: '0px'
      // }
    });
  }

  ngOnInit() {
    this.navbarService.backBtn = true;
    if (this.route.snapshot.queryParamMap.get('e')) {
      this.$todo.pipe(merge(this.$inProgress), merge(this.$done)).subscribe(entries => {
        entries.forEach(entry => {
          if (entry.id === this.route.snapshot.queryParamMap.get('e')) {
            this.openThread(entry);
          }
        });
      });
    }
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
    this.dialog.open(AddScrumEntryComponent, {
      data: { entryCollection: this.entryCollection, teamId: this.teamId },
      // position: {
      //   bottom: '0px'
      // }
    });
  }

  identify(idx, item: EntryInterface) {
    return item.id;
  }

  copyLinkTxt() {
    const copyText = <HTMLInputElement>document.getElementById('shareableLinkInp');
    copyText.select();
    document.execCommand('copy');
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

  /* ---------------------------------------------------------------------------------------------------- */
  /* BUGS METHODS */

  async addBug() {
    const { value: post } = await swal({
      title: 'Report bug',
      input: 'text',
      reverseButtons: true,
      showCancelButton: true,
    });
    if (post) {
      // add to firebase
      this.auth.user$.take(1).subscribe((user) => {
        this.bugCollection.add({
          txt: post, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
          imgUrl: user.photoURL
        });
      });
      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'Scrumboard interaction',
        eventAction: 'New bug reported',
      });
    }
  }

  async editBug(bug: EntryInterface) {
    const { value: post } = await swal({
      title: 'Edit bug',
      input: 'text',
      inputValue: bug.txt,
      reverseButtons: true,
      showCancelButton: true,
      onOpen: function () {
        const input = (<HTMLInputElement>swal.getInput());
        input.setSelectionRange(0, input.value.length);
      },
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (post) {
      this.bugCollection.doc(bug.id).update({
        txt: post
      });
    }
  }

  move_to_inprogress(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    swal({
      title: 'Move to in progress?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if (!entry.priority) {
          entry.priority = '!!!';
        }
        // Add to inProgress
        this.auth.user$.take(1).subscribe((user) => {
          this.entryCollection.add({
            txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
            imgUrl: user.photoURL, state: 'inProgress'
          });

        });
        // Delete from collection
        collection.doc(entry.id).delete().then(() => {
          const snack = this.snackBar.open('Moved to in progress', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            collection.add(entry);
          });
        });
      }
    });
  }

  deleteBug(bug: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete this bug permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        collection.doc(bug.id).delete().then(() => {
          const snack = this.snackBar.open('Bug was deleted', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            collection.add(bug);
          });

          // Google analytics event
        });
      }
    });
  }

  /* BUGS METHODS END*/
  /* ---------------------------------------------------------------------------------------------------- */

  /* ---------------------------------------------------------------------------------------------------- */
  /* IDEAS METHODS */
  async addIdea() {
    const { value: post } = await swal({
      title: 'What is your wonderful idea?',
      input: 'text',
      reverseButtons: true,
      showCancelButton: true,
    });
    if (post) {
      // add to firebase
      this.auth.user$.take(1).subscribe((user) => {
        this.ideaCollection.add({
          txt: post, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
          imgUrl: user.photoURL
        });
      });

      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'Scrumboard interaction',
        eventAction: 'New idea created',
      });
    }
  }

  async editIdea(idea: EntryInterface) {
    const { value: post } = await swal({
      title: 'Edit idea',
      input: 'text',
      inputValue: idea.txt,
      reverseButtons: true,
      showCancelButton: true,
      onOpen: function () {
        const input = (<HTMLInputElement>swal.getInput());
        input.setSelectionRange(0, input.value.length);
      },
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (post) {
      this.ideaCollection.doc(idea.id).update({
        txt: post
      });
    }
  }

  deleteIdea(idea: EntryInterface) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete your idea permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        this.ideaCollection.doc(idea.id).delete().then(() => {
          const snack = this.snackBar.open('Your idea is now history', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            this.ideaCollection.add(idea);
          });
          // Google analytics event

        });
      }
    });
  }

  /* IDEAS METHODS END */
  /* ---------------------------------------------------------------------------------------------------- */

  /* ---------------------------------------------------------------------------------------------------- */
  /* NOTES METHODS */

  async addNote() {
    const { value: post } = await swal({
      title: 'Add a something to remember',
      input: 'text',
      reverseButtons: true,
      showCancelButton: true,
    });
    if (post) {
      // add to firebase
      this.auth.user$.take(1).subscribe((user) => {
        this.noteCollection.add({
          txt: post, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
          imgUrl: user.photoURL
        });
      });

      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'Scrumboard interaction',
        eventAction: 'New note created',
      });
    }
  }

  async editNote(note: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    const { value: post } = await swal({
      title: 'Edit note',
      input: 'text',
      inputValue: note.txt,
      reverseButtons: true,
      showCancelButton: true,
      onOpen: function () {
        const input = (<HTMLInputElement>swal.getInput());
        input.setSelectionRange(0, input.value.length);
      },
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (post) {
      collection.doc(note.id).update({
        txt: post
      });
    }
  }

  deleteNote(note: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete your note permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        collection.doc(note.id).delete().then(() => {
          const snack = this.snackBar.open('Your note is now history', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            collection.add(note);
          });
          // Google analytics event

        });
      }
    });
  }

  /* NOTES METHODS END */
  /* ---------------------------------------------------------------------------------------------------- */

  /* ---------------------------------------------------------------------------------------------------- */
  /* FEEDBACK METHODS */

  moveToBugs(bug: EntryInterface) {
    swal({
      title: 'Move to collection of bugs?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Add to todo
        this.bugCollection.add({
          txt: bug.txt, priority: bug.priority, time: firestore.FieldValue.serverTimestamp()
        });
        // Delete from bug collection
        this.client_bugs_collection.doc(bug.id).delete().then(() => {
          this.client_bugs_collection.doc(bug.id).delete().then(() => {
            const snack = this.snackBar.open('Moved to tasks', 'Undo', {
              duration: 2500
            });
            snack.onAction().subscribe(() => {
              // Add to database again
              this.client_bugs_collection.add(bug);
            });
          });
        });
      }
    });
  }

  async edit_feature_request(entry: EntryInterface) {
    const { value: post } = await swal({
      title: 'Edit',
      input: 'text',
      inputValue: entry.txt,
      reverseButtons: true,
      showCancelButton: true,
      onOpen: function () {
        const input = (<HTMLInputElement>swal.getInput());
        input.setSelectionRange(0, input.value.length);
      },
      inputValidator: (value) => {
        return !value && 'You need to write something!';
      }
    });
    if (post) {
      this.client_feature_collection.doc(entry.id).update({
        txt: post
      });
    }
  }

  delete_feature_request(entry: EntryInterface) {
    swal({
      title: 'Are you sure?',
      text: 'This will delete it permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        this.client_feature_collection.doc(entry.id).delete().then(() => {
          const snack = this.snackBar.open('Your feature request is now history', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            this.client_feature_collection.add(entry);
          });
          // Google analytics event

        });
      }
    });
  }

  async add_feedback() {
    const { value: post } = await swal({
      title: 'Send feedback',
      html: `
      <select id="feedbackSelect" class="swal2-select" style="outline:0;">
      <option value="client_bugs">Bug</option>
      <option value="client_feature_request">Feature request</option>
      <option value="client_note">Note</option>
      </select>
      <textarea id="feedbackTxt" class="swal2-textarea"></textarea>`,
      showCancelButton: true,
      reverseButtons: true,
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('feedbackSelect')).value,
          (<HTMLInputElement>document.getElementById('feedbackTxt')).value,
        ];
      }
    });
    if (post[1] !== '') {
      this.auth.user$.take(1).subscribe(user => {
        this.afs.collection(post[0]).add({
          txt: post[1],
          date: firestore.FieldValue.serverTimestamp(),
        });
      });
    } else if (post[1] === '') {
      swal({
        title: 'Invalid.',
        type: 'error',
        text: 'Please fill in something!'
      });
    }
  }

  /* FEEDBACK METHODS END */
  /* ---------------------------------------------------------------------------------------------------- */

  /* ---------------------------------------------------------------------------------------------------- */
  /* COMMENTS METHODS */


  openThread(entry: EntryInterface) {
    const dialogRef = this.dialog.open(ThreadComponent, {
      data: { entry, teamId: this.teamId, boardId: this.id },
      // position: {
      //   bottom: '0px'
      // }
    });
  }


  /* COMMENTS METHODS END */
  /* ---------------------------------------------------------------------------------------------------- */
}

