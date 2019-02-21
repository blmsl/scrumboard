import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrumEntryComponent } from './add-scrum-entry.component';

describe('AddScrumEntryComponent', () => {
  let component: AddScrumEntryComponent;
  let fixture: ComponentFixture<AddScrumEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScrumEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScrumEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
