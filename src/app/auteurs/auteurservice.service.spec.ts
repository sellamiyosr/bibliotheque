import { TestBed } from '@angular/core/testing';

import { AuteurserviceService } from './auteurservice.service';

describe('AuteurserviceService', () => {
  let service: AuteurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuteurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
