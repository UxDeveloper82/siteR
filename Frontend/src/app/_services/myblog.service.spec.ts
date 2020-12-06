/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyblogService } from './myblog.service';

describe('Service: Myblog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyblogService]
    });
  });

  it('should ...', inject([MyblogService], (service: MyblogService) => {
    expect(service).toBeTruthy();
  }));
});
