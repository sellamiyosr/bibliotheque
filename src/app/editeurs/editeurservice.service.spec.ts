import { TestBed } from '@angular/core/testing';

import { EditeurserviceService } from './editeurservice.service';

describe('EditeurserviceService', () => {
  let service: EditeurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditeurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
