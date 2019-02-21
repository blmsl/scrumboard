import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { EntryInterface } from '../../extra/EntryInterface';
import { Validators, FormBuilder } from '@angular/forms';
import { firestore } from 'firebase/app';
import { MapToIterablePipe } from '../../extra/map-to-iterable.pipe';
import { TeamsInterface } from '../../extra/TeamsInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-scrum-entry',
  templateUrl: './add-scrum-entry.component.html',
  styleUrls: ['./add-scrum-entry.component.css']
})
export class AddScrumEntryComponent implements OnInit {

  priority: '!' | '!!' | '!!!' = '!';

  assignDeveloper = false;
  teamMembers$: Observable<any>;
  teamMembers = [
    {
      viewValue: 'fuck u', value: 'hehe'
    }
  ];

  form = this.formBuilder.group({
    txt: ['', Validators.required],
    assignedDeveloper: [''],
  });

  constructor(private afs: AngularFirestore, public dialogRef: MatDialogRef<AddScrumEntryComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {
      entryCollection: AngularFirestoreCollection<EntryInterface>, entry?: EntryInterface, teamId: string
    }) {
    console.log(data.entry);
    if (data.entry) {
      this.priority = data.entry.priority;
      if (data.entry.assigned) {
        this.assignDeveloper = true;
        this.form.patchValue({ assignedDeveloper: data.entry.assigned });
      }
    }
    this.form.patchValue({ txt: data.entry.txt });
    this.teamMembers$ = this.afs.doc<TeamsInterface>('teams/' + this.data.teamId).valueChanges().take(1).shareReplay(1).map(team => {
      const users = new MapToIterablePipe().transform(team.members);
      const teamMembers = [];
      for (const user of users) {
        teamMembers.push(
          { value: user.key, viewValue: user.val.name }
        );
      }
      console.log(teamMembers);
      return teamMembers;
    });
    this.teamMembers$.subscribe(x => console.log(x));
  }

  ngOnInit() {
  }

  add() {
    let assigned = null;
    if (this.assignDeveloper) {
      assigned = this.form.value.assignedDeveloper;
    }
    if (this.data.entry) {
      this.data.entryCollection.doc(this.data.entry.id).update({
        txt: this.form.value.txt,
        priority: this.priority,
        assigned
      });
    } else {
      this.data.entryCollection.add({
        txt: this.form.value.txt,
        state: 'todo', priority: this.priority,
        time: firestore.FieldValue.serverTimestamp(),
        assigned
      });
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}

