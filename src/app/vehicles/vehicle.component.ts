import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from './vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  @Input() vehicleList: Vehicle[];
  constructor() {
  }

  ngOnInit(): void {
  }

}
