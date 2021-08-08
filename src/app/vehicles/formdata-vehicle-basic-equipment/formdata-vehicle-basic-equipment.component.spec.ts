import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdataVehicleBasicEquipmentComponent } from './formdata-vehicle-basic-equipment.component';

describe('FormdataVehicleBasicEquipmentComponent', () => {
  let component: FormdataVehicleBasicEquipmentComponent;
  let fixture: ComponentFixture<FormdataVehicleBasicEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdataVehicleBasicEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdataVehicleBasicEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
