import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleComponent} from './vehicle.component';
import {AdvertisementComponent} from './advertisement/advertisement.component';


const routes: Routes = [
  {path: 'vehicles', component: VehicleComponent},
  {path: 'advertisement', component: AdvertisementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
