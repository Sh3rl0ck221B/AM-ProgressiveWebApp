import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMainDataComponent } from './vehicle-main-data.component';

describe('VehicleMainDataComponent', () => {
  let component: VehicleMainDataComponent;
  let fixture: ComponentFixture<VehicleMainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleMainDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
