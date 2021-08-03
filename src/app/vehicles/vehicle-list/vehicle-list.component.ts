import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent{
  @Input() vehicleList: Vehicle[];

}
