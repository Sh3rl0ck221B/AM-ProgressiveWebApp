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
    const vehicleBasicData = new VehicleBasicData();
    vehicleBasicData.manufacturers = this.vehicleBasicData.manufacturers;
    vehicleBasicData.models = this.vehicleBasicData.models;
    const vehicleConditionData = new VehicleConditionData();
    vehicleConditionData.mileages = this.vehicleConditionData.mileages;
    this.vehicleService.createVehicle(new Vehicle('4', vehicleBasicData, vehicleConditionData));
  }
}
