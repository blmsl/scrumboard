import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from './../../services/navbar.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit, OnDestroy {

  constructor(
    public navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.navbarService.backBtn = true;
  }

  ngOnDestroy() {
    this.navbarService.backBtn = false;

  }

}
