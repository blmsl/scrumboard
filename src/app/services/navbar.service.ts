import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  hidden = false;
  backBtn = false;
  title: string;

  constructor() { }
}
