import { TestBed } from '@angular/core/testing';

import { UploadresultService } from './uploadresult.service';

describe('UploadresultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadresultService = TestBed.get(UploadresultService);
    expect(service).toBeTruthy();
  });
});
