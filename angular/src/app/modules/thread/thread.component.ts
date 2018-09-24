import { PaginationService } from './../../services/pagination.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntryInterface } from '../../extra/EntryInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ScrollableDirective } from '../../extra/scrollable.directive';
import { CommentInterface } from '../../extra/CommentInterface';
import { AuthServiceService } from '../../services/auth-service.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  threadDoc: AngularFirestoreDocument;
  commentsCollection: AngularFirestoreCollection;

  commentFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  commentForm = new FormGroup({
    comment: this.commentFormControl
  });

  constructor(public dialogRef: MatDialogRef<ThreadComponent>,
    @Inject(MAT_DIALOG_DATA) public entry: EntryInterface,
    public auth: AuthServiceService,
    public afs: AngularFirestore) {
    this.threadDoc = this.afs.doc('threads/' + entry.threadId);
    this.commentsCollection = this.threadDoc.collection('comments');
  }

  scrollHandler(e) {
    console.log(e);
  }

  ngOnInit() {
  }

  onFormSubmit() {
    const input = this.commentForm.value.comment;
    console.log(input);
    this.auth.user$.take(1).subscribe(user => {
      this.commentsCollection.add({
        username: user.displayName,
        txt: input,
        imgUrl: user.photoURL,
        time: firebase.firestore.FieldValue.serverTimestamp()
      } as CommentInterface);
    });
  }

  close() {
    this.dialogRef.close();
  }

}
