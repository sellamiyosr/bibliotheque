import { TestBed } from '@angular/core/testing';

import { SepicialiteserviceService } from './sepicialiteservice.service';

describe('SepicialiteserviceService', () => {
  let service: SepicialiteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepicialiteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
