import { Observable } from 'rxjs/Observable';

export interface TeamsInterface {
    name: string;
    members: Object;
    imgURL?: Observable<string>;
    imgRef?: string;
    id?: string;
}
