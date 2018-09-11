import { TeamsInterface } from './TeamsInterface';
import { tap, startWith } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';

export function getImgUrlFromRef(data: TeamsInterface, storage: AngularFireStorage) {
    if (data.imgRef) { // If the team has img
        data.imgURL = storage.ref(data.imgRef).getDownloadURL().pipe(
          // Cache the url for blazing fast load time ;)
          tap(user => localStorage.setItem('img-' + data.id, JSON.stringify(user))),
          startWith(JSON.parse(localStorage.getItem('img-' + data.id)))
        );
      }
}
