import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../vehicle.model';
import {newArray} from '@angular/compiler/src/util';
import {VehiclesModule} from '../vehicles.module';
import {VehicleService} from '../vehicle.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit{

  vehicleList: Array<Vehicle> = [];

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
