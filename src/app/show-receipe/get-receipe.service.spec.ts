import { TestBed } from '@angular/core/testing';

import { GetReceipeService } from './get-receipe.service';

describe('GetReceipeService', () => {
  let service: GetReceipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetReceipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
