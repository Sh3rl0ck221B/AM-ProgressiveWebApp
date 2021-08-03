import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUploadDateComponent } from './vehicle-upload-date.component';

describe('VehicleUploadDateComponent', () => {
  let component: VehicleUploadDateComponent;
  let fixture: ComponentFixture<VehicleUploadDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleUploadDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleUploadDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
