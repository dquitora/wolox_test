import { TestBed } from '@angular/core/testing';

import { WoloxServiceService } from './wolox-service.service';

describe('WoloxServiceService', () => {
  let service: WoloxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoloxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
