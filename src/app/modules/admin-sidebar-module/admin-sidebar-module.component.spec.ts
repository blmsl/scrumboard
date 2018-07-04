import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarModuleComponent } from './admin-sidebar-module.component';

describe('AdminSidebarModuleComponent', () => {
  let component: AdminSidebarModuleComponent;
  let fixture: ComponentFixture<AdminSidebarModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidebarModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
