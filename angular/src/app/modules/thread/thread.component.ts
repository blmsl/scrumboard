import { CommentInterface } from './../../extra/CommentInterface';
import { PaginationService } from './../../services/pagination.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntryInterface } from '../../extra/EntryInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
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
  commentsCollection: AngularFirestoreCollection<CommentInterface>;
  comment$: Observable<CommentInterface>;

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
    public page: PaginationService,
    public afs: AngularFirestore) {
    this.threadDoc = this.afs.doc('threads/' + entry.threadId);
    this.commentsCollection = this.threadDoc.collection('comments');

    this.comment$ = this.toMap(this.commentsCollection.snapshotChanges());
  }

  ngOnInit() {
  }

  editComment(comment) {
    const newTxt = prompt('New txt', comment.txt);
    if (newTxt) {
      this.commentsCollection.doc(comment.doc.id).update({
        txt: newTxt
      }).then(() => this.page.restart());
    }
  }

  deleteComment(comment) {
    console.log(comment);
    this.commentsCollection.doc(comment.doc.id).delete().then(() => this.page.restart());
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
      } as CommentInterface).then(() => this.page.restart());
    });
  }

  close() {
    this.dialogRef.close();
  }

  toMap(observable: Observable<DocumentChangeAction<CommentInterface>[]>): Observable<CommentInterface[]> {
    return observable.map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as CommentInterface;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

}
