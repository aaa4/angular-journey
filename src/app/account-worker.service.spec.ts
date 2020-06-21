import { TestBed } from '@angular/core/testing';

import { AccountWorkerService } from './account-worker.service';

describe('AccountWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountWorkerService = TestBed.get(AccountWorkerService);
    expect(service).toBeTruthy();
  });
});
