export class Vehicle {

  id: string;
  manufacturer: string;
  model: string;
  mileAge: string;


  constructor(id: string, manufacturer: string, model: string, mileAge: string) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.model = model;
    this.mileAge = mileAge;
  }
}
