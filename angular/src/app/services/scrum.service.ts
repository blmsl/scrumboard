import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { EntryInterface } from '../extra/EntryInterface';
import { Observable } from 'rxjs/Observable';
import { Board } from '../extra/BoardInterface';
import { toMap } from '../extra/shared';

// This service is a singleton used for communication between all scrum subcomponents

export class ScrumService {

  boardDoc: AngularFirestoreDocument<Board>;

  // Used to display progressspinner. All subcomponents use the same progresspinner
  loading = true;

  todoCollection: AngularFirestoreCollection<EntryInterface>;
  inProgressCollection: AngularFirestoreCollection<EntryInterface>;
  doneCollection: AngularFirestoreCollection<EntryInterface>;

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

  constructor() {

    this.bugCollection = this.boardDoc.collection<EntryInterface>('bugs');
    this.$bugs = toMap(this.bugCollection.snapshotChanges());

    this.ideaCollection = this.boardDoc.collection<EntryInterface>('ideas');
    this.$ideas = toMap(this.ideaCollection.snapshotChanges());

    this.noteCollection = this.boardDoc.collection<EntryInterface>('notes');
    this.$notes = toMap(this.noteCollection.snapshotChanges());

    this.client_bugs_collection = this.boardDoc.collection<EntryInterface>('client_bugs');
    this.$client_bugs = toMap(this.client_bugs_collection.snapshotChanges());

    this.client_feature_collection = this.boardDoc.collection<EntryInterface>('client_feature_request');
    this.$c_features = toMap(this.client_feature_collection.snapshotChanges());

    this.client_notes_collection = this.boardDoc.collection<EntryInterface>('client_notes');
    this.$c_notes = toMap(this.client_notes_collection.snapshotChanges());


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


  private checkIfChecked(priority: string, x: string) {
    if (priority === x) { return 'checked'; }
    return null;
  }

}
