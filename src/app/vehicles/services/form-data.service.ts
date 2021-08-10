import { Injectable } from '@angular/core';
import {VehicleBasicData} from '../models/vehicle-basic-data.model';
import {VehicleConditionData} from '../models/vehicle-condition-data.model';
import {VehicleService} from './vehicle.service';
import {Vehicle} from '../models/vehicle.model';
import {VehicleTechnicalData} from '../models/vehicle-technical-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  vehicleBasicData: VehicleBasicData;
  vehicleConditionData: VehicleConditionData;
  vehicleTechnicalData: VehicleTechnicalData;

  constructor(private vehicleService: VehicleService) {
    this.vehicleBasicData = new VehicleBasicData();
    this.vehicleConditionData = new VehicleConditionData();
    this.vehicleTechnicalData = new VehicleTechnicalData();
  }

  postData(): void{
    const vehicleBasicData = new VehicleBasicData();
    vehicleBasicData.manufacturers = this.vehicleBasicData.manufacturers;
    vehicleBasicData.models = this.vehicleBasicData.models;
    vehicleBasicData.yearOfManufacture = this.vehicleBasicData.yearOfManufacture;
    vehicleBasicData.price = this.vehicleBasicData.price;
    vehicleBasicData.firstRegistration = this.vehicleBasicData.firstRegistration;
    const vehicleConditionData = new VehicleConditionData();
    vehicleConditionData.mileage = this.vehicleConditionData.mileage;
    vehicleConditionData.vehicleOwner = this.vehicleConditionData.vehicleOwner;
    vehicleConditionData.nextTechnicalExamination = this.vehicleConditionData.nextTechnicalExamination;
    const vehicleTechnicalData = new VehicleTechnicalData();
    vehicleTechnicalData.consumption = this.vehicleTechnicalData.consumption;
    vehicleTechnicalData.gearType = this.vehicleTechnicalData.gearType;
    vehicleTechnicalData.power = this.vehicleTechnicalData.power;
    vehicleTechnicalData.typeOfFuel = this.vehicleTechnicalData.typeOfFuel;
    vehicleTechnicalData.environmentalBadge = this.vehicleTechnicalData.environmentalBadge;
    this.vehicleService.createVehicle(new Vehicle('4', vehicleBasicData, vehicleConditionData, vehicleTechnicalData));
  }
}
