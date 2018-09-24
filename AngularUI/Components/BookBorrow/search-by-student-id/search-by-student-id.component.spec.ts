import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByStudentIdComponent } from './search-by-student-id.component';

describe('SearchByStudentIdComponent', () => {
  let component: SearchByStudentIdComponent;
  let fixture: ComponentFixture<SearchByStudentIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByStudentIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByStudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
