import { TeamsInterface } from './TeamsInterface';
import { tap, startWith } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { EntryInterface } from './EntryInterface';
import { DocumentChangeAction } from 'angularfire2/firestore';

export function getImgUrlFromRef(data: TeamsInterface, storage: AngularFireStorage) {
    if (data.imgRef) { // If the team has img
        data.imgURL = storage.ref(data.imgRef).getDownloadURL().pipe(
          // Cache the url for blazing fast load time ;)
          tap(user => localStorage.setItem('img-' + data.id, JSON.stringify(user))),
          startWith(JSON.parse(localStorage.getItem('img-' + data.id)))
        );
      }
}

// Takes in an onsnapshotchanges observable and converts it to data with id property
export function toMap(observable: Observable<DocumentChangeAction<EntryInterface>[]>): Observable<EntryInterface[]> {
  return observable.map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as EntryInterface;
      data.id = a.payload.doc.id;
      return data;
    });
  });
}
