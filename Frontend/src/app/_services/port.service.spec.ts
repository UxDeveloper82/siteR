/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortService } from './port.service';

describe('Service: Port', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortService]
    });
  });

  it('should ...', inject([PortService], (service: PortService) => {
    expect(service).toBeTruthy();
  }));
});
