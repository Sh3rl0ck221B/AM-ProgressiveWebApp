import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdataVehicleConditionComponent } from './formdata-vehicle-condition.component';

describe('FormdataVehicleConditionComponent', () => {
  let component: FormdataVehicleConditionComponent;
  let fixture: ComponentFixture<FormdataVehicleConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdataVehicleConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdataVehicleConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
