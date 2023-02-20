import { TestBed } from '@angular/core/testing';

import { BornDateService } from './born-date.service';

describe('BornDateService', () => {
  let service: BornDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BornDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
