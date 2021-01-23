import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicle} from './vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  @Input() vehicleList: Vehicle[];
  constructor() {
    this.vehicleList = [new Vehicle('VW', 'T5', '220000', '07/2008',
      '130', '4000', 'Diesel', 'Schaltgetriebe',
      '05/2021', '6,0', 'Grün (Euro 6)',
      '2', ['/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/autohaus-2138927_1920.jpg', '/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/conifer-1850227_1920.jpg', '/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/hong-kong-1990268_1920.jpg'], '22.12.2020'),
      new Vehicle('Nissan', 'Micra', '220000', '07/2008',
        '130', '7000', 'Diesel', 'Schaltgetriebe',
        '05/2021', '6,0', 'Grün (Euro 6)',
        '2', ['/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/autohaus-2138927_1920.jpg', '/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/conifer-1850227_1920.jpg', '/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/hong-kong-1990268_1920.jpg'], '22.12.2020'),
      new Vehicle('Mercedes', 'Benz', '220000', '07/2008',
        '130', '8500', 'Diesel', 'Schaltgetriebe',
        '05/2021', '6,0', 'Grün (Euro 6)',
        '2', ['/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/autohaus-2138927_1920.jpg', '/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/conifer-1850227_1920.jpg', '/Users/Chris/Documents/Auftraege/Automobile_Meyer/ProgressiveWebApp/src/assets/img/hong-kong-1990268_1920.jpg'], '22.12.2020')
    ];
  }

  ngOnInit(): void {
  }

}
