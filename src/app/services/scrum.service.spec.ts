import { TestBed, inject } from '@angular/core/testing';

import { ScrumService } from './scrum.service';

describe('ScrumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrumService]
    });
  });

  it('should be created', inject([ScrumService], (service: ScrumService) => {
    expect(service).toBeTruthy();
  }));
});
