import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../../services/navbar.service';


@Component({
  selector: 'app-admin-sidebar-module',
  templateUrl: './admin-sidebar-module.component.html',
  styleUrls: ['./admin-sidebar-module.component.css']
})
export class AdminSidebarModuleComponent implements OnInit {

  constructor(
    public navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.navbarService.hidden = true;
  }

}
