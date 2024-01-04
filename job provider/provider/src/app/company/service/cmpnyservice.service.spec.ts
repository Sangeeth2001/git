import { TestBed } from '@angular/core/testing';

import { CmpnyserviceService } from './cmpnyservice.service';

describe('CmpnyserviceService', () => {
  let service: CmpnyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmpnyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
