import { TestBed, inject } from '@angular/core/testing';

import { CheckLoggedInService } from './check-logged-in.service';

describe('CheckLoggedInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckLoggedInService]
    });
  });

  it('should be created', inject([CheckLoggedInService], (service: CheckLoggedInService) => {
    expect(service).toBeTruthy();
  }));
});
