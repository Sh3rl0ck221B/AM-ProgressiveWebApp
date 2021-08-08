import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../services/vehicle.service';
import {FormDataService} from '../services/form-data.service';
import {VehicleBasicData} from '../models/vehicle-basic-data.model';
import {VehicleConditionData} from '../models/vehicle-condition-data.model';

@Component({
  selector: 'app-formdata-vehicle-condition',
  templateUrl: './formdata-vehicle-condition.component.html',
  styleUrls: ['./formdata-vehicle-condition.component.scss']
})
export class FormdataVehicleConditionComponent implements OnInit {

  vehicleConditionData: VehicleConditionData;


  constructor(private vehicleService: VehicleService,
              private formDataService: FormDataService) {
    this.vehicleConditionData = formDataService.vehicleConditionData;
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.formDataService.postData();
  }
}
