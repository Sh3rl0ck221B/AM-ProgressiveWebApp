import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCarouselItemComponent } from './vehicle-carousel-item.component';

describe('VehicleCarouselItemComponent', () => {
  let component: VehicleCarouselItemComponent;
  let fixture: ComponentFixture<VehicleCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleCarouselItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
