import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleComponent} from './vehicle.component';
import {FormdataVehicleConditionComponent} from './formdata-vehicle-condition/formdata-vehicle-condition.component';
import {FormdataBasicComponent} from './formdata-basic/formdata-basic.component';
import {FormdataTechnicalDetailsComponent} from './formdata-technical-details/formdata-technical-details.component';


const routes: Routes = [
  {path: 'vehicles', component: VehicleComponent,
  children: [
    {path: 'vehicleBasicData', component: FormdataBasicComponent},
    {path: 'vehicleCondition', component: FormdataVehicleConditionComponent},
    {path: 'vehicleTechnicalData', component: FormdataTechnicalDetailsComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
