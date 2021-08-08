import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdataTechnicalDetailsComponent } from './formdata-technical-details.component';

describe('FormdataTechnicalDetailsComponent', () => {
  let component: FormdataTechnicalDetailsComponent;
  let fixture: ComponentFixture<FormdataTechnicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdataTechnicalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdataTechnicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
