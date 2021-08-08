import {VehicleBasicData} from './vehicle-basic-data.model';
import {VehicleConditionData} from './vehicle-condition-data.model';

export class Vehicle {

  id: string;
  vehicleBasicData: VehicleBasicData;
  vehicleConditionData: VehicleConditionData;

  constructor(id: string, vehicleBasicData: VehicleBasicData, vehicleConditionData: VehicleConditionData) {
    this.id = id;
    this.vehicleBasicData = vehicleBasicData;
    this.vehicleConditionData = vehicleConditionData;
  }
}
