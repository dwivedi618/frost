import { TestBed } from '@angular/core/testing';

import { WcdialogService } from './wcdialog.service';

describe('WcdialogService', () => {
  let service: WcdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
