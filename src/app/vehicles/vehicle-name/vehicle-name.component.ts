import {Component, Input} from '@angular/core';
import {Vehicle} from '../vehicle.model';

@Component({
  selector: 'app-vehicle-name',
  template: `
    <h3>{{ vehicle.manufacturer }} {{ vehicle.model }}</h3>
  `
})
export class VehicleNameComponent{
  @Input() vehicle: Vehicle;
}
