import { TestBed } from '@angular/core/testing';

import { AdGroupService } from './ad-group.service';

describe('AdGroupService', () => {
  let service: AdGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
