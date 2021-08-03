import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../vehicle.model';

@Component({
  selector: 'app-vehicle-price',
  template: `
    <h3>{{ price }} €</h3>
    `
})
export class VehiclePriceComponent{

  @Input() vehicle: Vehicle;
  @Input() price: string;
  constructor() { }


}
