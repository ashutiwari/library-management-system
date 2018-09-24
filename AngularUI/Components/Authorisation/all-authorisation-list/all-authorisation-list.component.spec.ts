import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAuthorisationListComponent } from './all-authorisation-list.component';

describe('AllAuthorisationListComponent', () => {
  let component: AllAuthorisationListComponent;
  let fixture: ComponentFixture<AllAuthorisationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAuthorisationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAuthorisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
