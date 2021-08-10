export class VehicleBasicData {
  private _manufacturer: string;
  private _model: string;
  private _price: number;
  private _yearOfManufacture: number;
  private _firstRegistration: string;


  get firstRegistration(): string {
    return this._firstRegistration;
  }

  set firstRegistration(value: string) {
    this._firstRegistration = value;
  }

  get manufacturers(): string {
    return this._manufacturer;
  }

  set manufacturers(value: string) {
    this._manufacturer = value;
  }

  get models(): string {
    return this._model;
  }

  set models(value: string) {
    this._model = value;
  }


  get manufacturer(): string {
    return this._manufacturer;
  }

  set manufacturer(value: string) {
    this._manufacturer = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get yearOfManufacture(): number {
    return this._yearOfManufacture;
  }

  set yearOfManufacture(value: number) {
    this._yearOfManufacture = value;
  }
}
