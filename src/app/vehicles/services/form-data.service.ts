import { Injectable } from '@angular/core';
import {VehicleBasicData} from '../models/vehicle-basic-data.model';
import {VehicleConditionData} from '../models/vehicle-condition-data.model';
import {VehicleService} from './vehicle.service';
import {Vehicle} from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  vehicleBasicData: VehicleBasicData;
  vehicleConditionData: VehicleConditionData;

  constructor(private vehicleService: VehicleService) {
    this.vehicleBasicData = new VehicleBasicData();
    this.vehicleConditionData = new VehicleConditionData();
  }

  postData(): void{
    const vehicle = new Vehicle('4', this.vehicleBasicData, this.vehicleConditionData);
    this.vehicleService.createVehicle(vehicle);
  }
}
