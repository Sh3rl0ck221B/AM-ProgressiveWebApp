import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';

@Component({
  selector: 'app-vehicle-main-data',
  templateUrl: './vehicle-main-data.component.html',
})
export class VehicleMainDataComponent{

  @Input() vehicle: Vehicle;

}
