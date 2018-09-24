import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisterStudentComponent } from './resister-student.component';

describe('ResisterStudentComponent', () => {
  let component: ResisterStudentComponent;
  let fixture: ComponentFixture<ResisterStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResisterStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResisterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
