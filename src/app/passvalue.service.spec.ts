import { TestBed } from '@angular/core/testing';

import { PassvalueService } from './passvalue.service';

describe('PassvalueService', () => {
  let service: PassvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
