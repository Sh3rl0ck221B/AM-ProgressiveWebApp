import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../vehicle.model';
import {newArray} from '@angular/compiler/src/util';
import {VehiclesModule} from '../vehicles.module';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent{
  @Input() vehicles: Vehicle[];


  addvehicle(manufacturer: HTMLInputElement, model: HTMLInputElement, mileAge: HTMLInputElement,
             firstRegistration: HTMLInputElement, powerInKW: HTMLInputElement, price: HTMLInputElement,
             typeOfFuel: HTMLInputElement, gearType: HTMLInputElement, nextTechnicalExamination?: HTMLInputElement,
             consumptionPerHundredKilometer?: HTMLInputElement, environmentalBadge?: HTMLInputElement,
             numberOfVehicleHolders?: HTMLInputElement): boolean {
    this.vehicles.push(new Vehicle(manufacturer.value, model.value, mileAge.value, firstRegistration.value, powerInKW.value, price.value,
      typeOfFuel.value, gearType.value, nextTechnicalExamination.value, consumptionPerHundredKilometer.value,
      environmentalBadge.value, numberOfVehicleHolders.value));
    return false;
  }

}
