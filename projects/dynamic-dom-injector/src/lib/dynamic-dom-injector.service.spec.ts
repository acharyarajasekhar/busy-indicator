import { TestBed } from '@angular/core/testing';

import { DynamicDomInjectorService } from './dynamic-dom-injector.service';

describe('DynamicDomInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicDomInjectorService = TestBed.get(DynamicDomInjectorService);
    expect(service).toBeTruthy();
  });
});
