import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNameComponent } from './vehicle-name.component';

describe('VehicleNameComponent', () => {
  let component: VehicleNameComponent;
  let fixture: ComponentFixture<VehicleNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
