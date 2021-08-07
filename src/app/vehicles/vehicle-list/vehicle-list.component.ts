import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';
import {VehicleService} from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit{
  vehicleList: Array<Vehicle> = [];

  constructor(private vehicleService: VehicleService) {
  }


  ngOnInit(): void
  {
    this.vehicleList = this.vehicleService.getVehicleList();
  }

}
