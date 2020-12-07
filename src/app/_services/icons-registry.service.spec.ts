import { TestBed } from '@angular/core/testing';

import { IconsRegistryService } from './icons-registry.service';

describe('IconsRegistryService', () => {
  let service: IconsRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconsRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
