import {VehicleBasicData} from './vehicle-basic-data.model';
import {VehicleConditionData} from './vehicle-condition-data.model';
import {VehicleTechnicalData} from './vehicle-technical-data.model';

export class Vehicle {

  id: string;
  vehicleBasicData: VehicleBasicData;
  vehicleConditionData: VehicleConditionData;
  vehicleTechnicalData: VehicleTechnicalData;

  constructor(id: string, vehicleBasicData: VehicleBasicData, vehicleConditionData: VehicleConditionData,
              vehicleTechnicalData: VehicleTechnicalData) {
    this.id = id;
    this.vehicleBasicData = vehicleBasicData;
    this.vehicleConditionData = vehicleConditionData;
    this.vehicleTechnicalData = vehicleTechnicalData;
  }
}
