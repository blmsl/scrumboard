import { CommentInterface } from './../../extra/CommentInterface';
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

  entryDoc: AngularFirestoreDocument;
  entry$: Observable<EntryInterface>;
  commentsCollection: AngularFirestoreCollection<CommentInterface>;
  comments$: Observable<CommentInterface[]>;

  commentFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  commentForm = new FormGroup({
    comment: this.commentFormControl
  });

  constructor(public dialogRef: MatDialogRef<ThreadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {entry: EntryInterface, teamId: string, boardId: string},
    public auth: AuthServiceService,
    public afs: AngularFirestore) {
    this.entryDoc = this.afs.doc<EntryInterface>('teams/' + data.teamId + '/boards/' + data.boardId + '/entries/' + data.entry.id);
    this.commentsCollection = this.entryDoc.collection('comments', ref => ref.orderBy('time', 'desc'));

    this.comments$ = this.toMap(this.commentsCollection.snapshotChanges());
  }

  ngOnInit() {
  }

  editComment(comment) {
    const newTxt = prompt('New txt', comment.txt);
    if (newTxt) {
      this.commentsCollection.doc(comment.doc.id).update({
        txt: newTxt
      });
    }
  }

  deleteComment(comment: CommentInterface) {
    console.log(comment);
    this.commentsCollection.doc(comment.id).delete();
  }

  onFormSubmit() { // Creating new comment
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
