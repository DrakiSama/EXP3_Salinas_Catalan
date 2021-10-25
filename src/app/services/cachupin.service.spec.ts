import { TestBed } from '@angular/core/testing';

import { CachupinService } from './cachupin.service';

describe('CachupinService', () => {
  let service: CachupinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachupinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
