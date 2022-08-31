import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageAreasComponent } from './garage-areas.component';

describe('GarageAreasComponent', () => {
  let component: GarageAreasComponent;
  let fixture: ComponentFixture<GarageAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarageAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
