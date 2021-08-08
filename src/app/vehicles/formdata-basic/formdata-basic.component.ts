import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';
import {VehicleService} from '../services/vehicle.service';
import {FormDataService} from '../services/form-data.service';
import {VehicleBasicData} from '../models/vehicle-basic-data.model';

@Component({
  selector: 'app-vehicle-advertisement',
  templateUrl: './formdata-basic.component.html',
  styleUrls: ['./formdata-basic.component.scss']
})
export class FormdataBasicComponent implements OnInit {

  vehicleBasicData: VehicleBasicData;

  vehicleList: Array<Vehicle> = [];
  @Input() showModal: boolean;



  constructor(private vehicleService: VehicleService,
              private formDataService: FormDataService) {
    this.vehicleBasicData = formDataService.vehicleBasicData;
  }

  ngOnInit(): void {
  }

  /*
  addvehicle(manufacturer: HTMLInputElement, model: HTMLInputElement, mileAge: HTMLInputElement): boolean {
    this.vehicleService.createVehicle(new Vehicle('3', manufacturer.value, model.value, mileAge.value));
    return false;
  }
   */

}
