import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from './models/vehicle.model';
import {VehicleService} from './services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicleList: Array<Vehicle> = [];
  showModal: boolean;

  constructor(private vehicleService: VehicleService) {
  }

  addvehicle(manufacturer: HTMLInputElement, model: HTMLInputElement, mileAge: HTMLInputElement): boolean {
    this.vehicleService.createVehicle(new Vehicle('3', manufacturer.value, model.value, mileAge.value));
    this.vehicleService.getVehicleList();
    return false;
  }

  ngOnInit(): void {
    this.vehicleList = this.vehicleService.getVehicleList();
  }


}
