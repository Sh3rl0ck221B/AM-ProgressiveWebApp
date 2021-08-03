import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vehicle-carousel-item',
  templateUrl: './vehicle-carousel-item.component.html',
  styleUrls: ['./vehicle-carousel-item.component.scss']
})
export class VehicleCarouselItemComponent{
  @Input() imageUrl: string;

}
