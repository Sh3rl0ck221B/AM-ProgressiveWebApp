export class Vehicle {

  manufacturer: string;
  model: string;
  mileAge: string;
  firstRegistration: string;
  powerInKW: string;
  powerInPS: number;
  typeOfFuel: string;
  numberOfVehicleHolders: string;
  gearType: string;
  nextTechnicalExamination: string;
  consumptionPerHundredKilometer: string;
  environmentalBadge: string;
  price: string;
  images: string[];
  uploadDate: string;


  constructor(manufacturer: string, model: string, mileAge: string, firstRegistration: string, powerInKW: string, price: string,
              typeOfFuel: string, gearType: string, nextTechnicalExamination?: string, consumptionPerHundredKilometer?: string,
              environmentalBadge?: string, numberOfVehicleHolders?: string, images?: string[], uploadDate?: string) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.mileAge = mileAge;
    this.firstRegistration = firstRegistration;
    this.powerInKW = powerInKW;
    this.images = images;
    this.powerInPS = parseInt(powerInKW, 10) * 1.36;
    this.typeOfFuel = typeOfFuel;
    this.numberOfVehicleHolders = numberOfVehicleHolders || 'keine Angabe';
    this.gearType = gearType;
    this.nextTechnicalExamination = nextTechnicalExamination || 'keine Angabe';
    this.consumptionPerHundredKilometer = consumptionPerHundredKilometer || 'keine Angabe';
    this.environmentalBadge = environmentalBadge || 'keine Angabe';
    this.price = price;
    this.uploadDate = uploadDate;
  }
}
