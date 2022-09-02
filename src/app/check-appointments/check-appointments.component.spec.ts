import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAppointmentsComponent } from './check-appointments.component';

describe('CheckAppointmentsComponent', () => {
  let component: CheckAppointmentsComponent;
  let fixture: ComponentFixture<CheckAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
