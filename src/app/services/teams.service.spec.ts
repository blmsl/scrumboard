import { TestBed, inject } from '@angular/core/testing';

import { TeamsService } from './teams.service';

describe('BoardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsService]
    });
  });

  it('should be created', inject([TeamsService], (service: TeamsService) => {
    expect(service).toBeTruthy();
  }));
});
