import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleRoutingModule} from './vehicle-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleMainDataComponent } from './vehicle-main-data/vehicle-main-data.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';


@NgModule({
  declarations: [VehicleComponent, VehicleListComponent,
    VehicleMainDataComponent, VehicleItemComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehiclesModule { }
