import { TestBed, inject } from '@angular/core/testing';

import { IncidentService } from './incident.data.service';

describe('Incident.DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidentService]
    });
  });

  // it('should be created', inject([IncidentService], (service: IncidentService) => {
  //   expect(service).toBeTruthy();
  // }));
});
