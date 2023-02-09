import { TestBed } from '@angular/core/testing';

import { ChordTypesService } from './chord-types.service';

describe('ChordTypesService', () => {
  let service: ChordTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChordTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
