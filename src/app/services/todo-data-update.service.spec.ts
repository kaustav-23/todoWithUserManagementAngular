import { TestBed } from '@angular/core/testing';

import { TodoDataUpdateService } from './todo-data-update.service';

describe('TodoDataUpdateService', () => {
  let service: TodoDataUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
