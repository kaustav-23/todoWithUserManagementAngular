import { TestBed } from '@angular/core/testing';

import { UserDataUpdateService } from './user-data-update.service';

describe('UserDataUpdateService', () => {
  let service: UserDataUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
