import { TestBed } from '@angular/core/testing';

import { OfflineIndicatorService } from './offline-indicator.service';

describe('OfflineIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineIndicatorService = TestBed.get(OfflineIndicatorService);
    expect(service).toBeTruthy();
  });
});
