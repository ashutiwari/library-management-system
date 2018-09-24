import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBookIdComponent } from './search-by-book-id.component';

describe('SearchByBookIdComponent', () => {
  let component: SearchByBookIdComponent;
  let fixture: ComponentFixture<SearchByBookIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByBookIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBookIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
