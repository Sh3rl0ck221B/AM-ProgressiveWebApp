import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdataVehicleAdditionalEquipmentComponent } from './formdata-vehicle-additional-equipment.component';

describe('FormdataVehicleAdditionalEquipmentComponent', () => {
  let component: FormdataVehicleAdditionalEquipmentComponent;
  let fixture: ComponentFixture<FormdataVehicleAdditionalEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdataVehicleAdditionalEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdataVehicleAdditionalEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
