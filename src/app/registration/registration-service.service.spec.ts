import { TestBed, inject } from '@angular/core/testing';

import { RegistrationServiceService } from './registration-service.service';

describe('RegistrationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationServiceService]
    });
  });

  it('should ...', inject([RegistrationServiceService], (service: RegistrationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
