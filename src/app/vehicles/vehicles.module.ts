import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleRoutingModule} from './vehicle-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleMainDataComponent } from './vehicle-main-data/vehicle-main-data.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';
import { FormdataBasicComponent } from './formdata-basic/formdata-basic.component';
import { FormdataVehicleConditionComponent } from './formdata-vehicle-condition/formdata-vehicle-condition.component';
import { FormdataTechnicalDetailsComponent } from './formdata-technical-details/formdata-technical-details.component';
import { FormdataVehicleBasicEquipmentComponent } from './formdata-vehicle-basic-equipment/formdata-vehicle-basic-equipment.component';
import { FormdataVehicleAdditionalEquipmentComponent } from './formdata-vehicle-additional-equipment/formdata-vehicle-additional-equipment.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [VehicleComponent, VehicleListComponent,
    VehicleMainDataComponent, VehicleItemComponent, FormdataBasicComponent, FormdataVehicleConditionComponent,
    FormdataTechnicalDetailsComponent, FormdataVehicleBasicEquipmentComponent, FormdataVehicleAdditionalEquipmentComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule
  ]
})
export class VehiclesModule { }
