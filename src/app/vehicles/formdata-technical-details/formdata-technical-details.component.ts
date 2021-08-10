import {Component, Input, OnInit} from '@angular/core';
import {VehicleBasicData} from '../models/vehicle-basic-data.model';
import {Vehicle} from '../models/vehicle.model';
import {VehicleService} from '../services/vehicle.service';
import {FormDataService} from '../services/form-data.service';
import {VehicleTechnicalData} from '../models/vehicle-technical-data.model';

@Component({
  selector: 'app-formdata-technical-details',
  templateUrl: './formdata-technical-details.component.html',
  styleUrls: ['./formdata-technical-details.component.scss']
})
export class FormdataTechnicalDetailsComponent {

  vehicleTechnicalData: VehicleTechnicalData;

  vehicleList: Array<Vehicle> = [];

  constructor(private vehicleService: VehicleService,
              private formDataService: FormDataService) {
    this.vehicleTechnicalData = formDataService.vehicleTechnicalData;
  }
}
