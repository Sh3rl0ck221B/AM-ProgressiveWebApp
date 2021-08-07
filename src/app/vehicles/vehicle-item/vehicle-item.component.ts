import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';
import {VehicleService} from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss']
})
export class VehicleItemComponent{
  @Input() vehicle: Vehicle;

  constructor(private vehicleService: VehicleService){
  }

  deleteVehicle(id: string): void{
    this.vehicleService.deleteVehicle(id);
  }
}
