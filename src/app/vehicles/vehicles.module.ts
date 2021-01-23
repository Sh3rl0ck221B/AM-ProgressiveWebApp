import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleRoutingModule} from './vehicle-routing.module';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { VehicleCarouselComponent } from './vehicle-carousel/vehicle-carousel.component';
import { VehicleCarouselItemComponent } from './vehicle-carousel-item/vehicle-carousel-item.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleNameComponent } from './vehicle-name/vehicle-name.component';
import { VehiclePriceComponent } from './vehicle-price/vehicle-price.component';
import { VehicleUploadDateComponent } from './vehicle-upload-date/vehicle-upload-date.component';
import { VehicleMainDataComponent } from './vehicle-main-data/vehicle-main-data.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';


@NgModule({
  declarations: [VehicleComponent, AdvertisementComponent, VehicleCarouselComponent, VehicleCarouselItemComponent, VehicleListComponent,
    VehicleNameComponent, VehiclePriceComponent, VehicleUploadDateComponent, VehicleMainDataComponent, VehicleItemComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehiclesModule { }
