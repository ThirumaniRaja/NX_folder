import { TestBed } from '@angular/core/testing';

import { WidgetslistService } from './widgetslist.service';

describe('WidgetslistService', () => {
  let service: WidgetslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
