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
import { MatDialog } from '@angular/material/dialog';
import { ThreadComponent } from '../../modules/thread/thread.component';
import { toMap } from '../../extra/shared';
import { ScrumService } from '../../services/scrum.service';
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


  isPublic = false; // used for the make public link swal popup
  isSignedIn = false;
  shareableLink: string;


  scrumService: ScrumService;

  sub: Subscription;
  navTab = 'todo';

  disableAnimations: boolean;

  ngAfterViewInit(): void {
    this.disableAnimations = true;
  }

  constructor(public route: ActivatedRoute,
    public teamsService: TeamsService,
    public auth: AuthServiceService,
    public snackBar: MatSnackBar,
    public navbarService: NavbarService,
    public dialog: MatDialog,
    public afs: AngularFirestore) {

    this.scrumService = new ScrumService();

    this.id = this.route.snapshot.paramMap.get('id');
    this.teamId = this.route.snapshot.paramMap.get('teamId');
    this.shareableLink = 'https://scrum.magson.no/scrum/' + this.teamId + '/' + this.id;

    this.scrumService.boardDoc = afs.doc<Board>('teams/' + this.teamId + '/boards/' + this.id);
    this.sub = this.scrumService.boardDoc.valueChanges().subscribe(board => {
      this.isPublic = board.isPublic;
      navbarService.title = board.name;
    });





    this.auth.user$.take(1).subscribe((user) => {
      if (user) {
        this.isSignedIn = true;
      }
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

  add_to_todo(entry: EntryInterface) {
    // TODO
  }

  ngOnInit() {
    this.navbarService.backBtn = true;
  }


  ngOnDestroy() {
    this.navbarService.backBtn = false;

    this.sub.unsubscribe();
  }


  uploadBoardVisibility(val) {
    console.log(this.isPublic, val);
    this.scrumService.boardDoc.update({
      isPublic: val.checked
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
      title: 'Describe the bug',
      html:
        '<input id="swal-input2" type="text" placeholder="Task description" class="swal2-input">' +
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
          (<HTMLInputElement>document.getElementById('swal-input2')).value,
          priority
        ];
      },
    });
    if (post[0] !== '') {
      this.scrumService.bugCollection.add({ txt: post[0], priority: post[1], time: firestore.FieldValue.serverTimestamp() });
      // Google analytics event
      (<any>window).ga('send', 'event', {
        eventCategory: 'Scrumboard interaction',
        eventAction: 'New bug reported',
      });
    } else if (post[0] === '') {
      swal({
        title: 'Invalid.',
        type: 'error',
        text: 'Please fill in a description of the bug!'
      });
    }
  }

  async editBug(bug: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    const { value: post } = await swal({
      title: 'Edit bug',
      html:
        `<input id="swal-input3" type="text" value='${bug.txt}' class="swal2-input">` +
        this.scrumService.getRadio(bug.priority),
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
          (<HTMLInputElement>document.getElementById('swal-input3')).value,
          priority
        ];
      },
      onOpen: function () {
        const input = (<HTMLInputElement>document.getElementById('swal-input3'));
        input.setSelectionRange(0, input.value.length);
      },
    });
    if (post) {
      collection.doc(bug.id).update({
        txt: post[0],
        priority: post[1]
      });
    }
  }

  move_bug_to_inprogress(entry: EntryInterface, collection: AngularFirestoreCollection<EntryInterface>) {
    swal({
      title: 'Move to in progress?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Add to todo
        this.auth.user$.take(1).subscribe((user) => {
          this.scrumService.inProgressCollection.add({
            txt: entry.txt, priority: entry.priority, developer: user.displayName, time: firestore.FieldValue.serverTimestamp(),
            imgUrl: user.photoURL
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
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
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
        this.scrumService.ideaCollection.add({
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
      this.scrumService.ideaCollection.doc(idea.id).update({
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
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        this.scrumService.ideaCollection.doc(idea.id).delete().then(() => {
          const snack = this.snackBar.open('Your idea is now history', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            this.scrumService.ideaCollection.add(idea);
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
        this.scrumService.noteCollection.add({
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
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
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
        this.scrumService.bugCollection.add({
          txt: bug.txt, priority: bug.priority, time: firestore.FieldValue.serverTimestamp()
        });
        // Delete from bug collection
        this.scrumService.client_bugs_collection.doc(bug.id).delete().then(() => {
          this.scrumService.client_bugs_collection.doc(bug.id).delete().then(() => {
            const snack = this.snackBar.open('Moved to tasks', 'Undo', {
              duration: 2500
            });
            snack.onAction().subscribe(() => {
              // Add to database again
              this.scrumService.client_bugs_collection.add(bug);
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
      this.scrumService.client_feature_collection.doc(entry.id).update({
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
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#e95d4f',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Delete method here
        this.scrumService.client_feature_collection.doc(entry.id).delete().then(() => {
          const snack = this.snackBar.open('Your feature request is now history', 'Undo', {
            duration: 2500
          });
          snack.onAction().subscribe(() => {
            // Add to database again
            this.scrumService.client_feature_collection.add(entry);
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


 

  /* COMMENTS METHODS END */
  /* ---------------------------------------------------------------------------------------------------- */
}

