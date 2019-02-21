import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { EntryInterface } from '../../extra/EntryInterface';
import { Validators, FormBuilder } from '@angular/forms';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-add-scrum-entry',
  templateUrl: './add-scrum-entry.component.html',
  styleUrls: ['./add-scrum-entry.component.css']
})
export class AddScrumEntryComponent implements OnInit {

  priority: '!' | '!!' | '!!!' = '!';

  form = this.formBuilder.group({
    txt: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<AddScrumEntryComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { entryCollection: AngularFirestoreCollection<EntryInterface>, entry?: EntryInterface }) {
    console.log(data.entry);
    if (data.entry) {
      this.priority = data.entry.priority;
    }
    this.form.patchValue({ txt: data.entry.txt });
  }

  ngOnInit() {
  }

  add() {
    if (this.data.entry) {
      this.data.entryCollection.doc(this.data.entry.id).update({
        txt: this.form.value.txt,
        priority: this.priority
      });
    } else {
      this.data.entryCollection.add({
        txt: this.form.value.txt, state: 'todo', priority: this.priority, time: firestore.FieldValue.serverTimestamp()
      });
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
