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
    vehicleBasicData.yearOfManufacture = this.vehicleBasicData.yearOfManufacture;
    vehicleBasicData.price = this.vehicleBasicData.price;
    const vehicleConditionData = new VehicleConditionData();
    vehicleConditionData.mileage = this.vehicleConditionData.mileage;
    vehicleConditionData.vehicleOwner = this.vehicleConditionData.vehicleOwner;
    this.vehicleService.createVehicle(new Vehicle('4', vehicleBasicData, vehicleConditionData));
  }
}
