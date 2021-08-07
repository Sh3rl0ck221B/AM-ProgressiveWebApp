import { Injectable } from '@angular/core';
import {Vehicle} from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {


  vehicleList: Array<Vehicle> = [
    new Vehicle('1', 'VW', 'T5', '120000'),
    new Vehicle('2', 'Nissan', 'Micra', '77000'),
    new Vehicle('3', 'Porsche', 'Cayenne', '66000')
  ];

  constructor() { }

  getVehicleList(): Array<Vehicle>{
    return this.vehicleList;
  }

  getVehicle(id: string): Vehicle{
    return this.vehicleList.find(vehicle => vehicle.id === id);
  }

  deleteVehicle(id: string): boolean{
    const vehicle = this.vehicleList.find(car => car.id === id);
    this.vehicleList.splice(this.vehicleList.indexOf(vehicle), 1);
    return true;
  }

  createVehicle(vehicle: Vehicle): void{
    vehicle.id = this.vehicleList.length.toString();
    this.vehicleList.push(vehicle);
  }

  updateVehicle(vehicleParam: Vehicle): void
  {
    const vehicle = this.vehicleList.find(car => car.id === vehicleParam.id);
    vehicleParam.id = vehicle.id;
    this.vehicleList[vehicleParam.id] = vehicleParam;
  }
}
