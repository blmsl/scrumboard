import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsModuleComponent } from './teams-module.component';

describe('TeamsModuleComponent', () => {
  let component: TeamsModuleComponent;
  let fixture: ComponentFixture<TeamsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
