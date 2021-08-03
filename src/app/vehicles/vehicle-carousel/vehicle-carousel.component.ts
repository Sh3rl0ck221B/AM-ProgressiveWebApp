import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vehicle-carousel',
  templateUrl: './vehicle-carousel.component.html',
  styleUrls: ['./vehicle-carousel.component.scss']
})
export class VehicleCarouselComponent{

  @Input() images: string[];

}
