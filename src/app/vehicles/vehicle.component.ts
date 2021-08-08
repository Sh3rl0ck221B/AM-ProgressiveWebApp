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

  ngOnInit(): void {
    this.vehicleList = this.vehicleService.getVehicleList();
  }


}
