import { TestBed } from '@angular/core/testing';

import { BookBorrowService } from './book-borrow.service';

describe('BookBorrowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookBorrowService = TestBed.get(BookBorrowService);
    expect(service).toBeTruthy();
  });
});
