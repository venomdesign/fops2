import { TestBed, inject } from '@angular/core/testing';

import { RegistrationserviceService } from './registrationservice.service';

describe('RegistrationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationserviceService]
    });
  });

  it('should be created', inject([RegistrationserviceService], (service: RegistrationserviceService) => {
    expect(service).toBeTruthy();
  }));
});
