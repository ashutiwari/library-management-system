import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadatePasswordComponent } from './upadate-password.component';

describe('UpadatePasswordComponent', () => {
  let component: UpadatePasswordComponent;
  let fixture: ComponentFixture<UpadatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
