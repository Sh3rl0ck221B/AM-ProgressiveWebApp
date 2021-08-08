export class VehicleBasicData {
  private manufacturer: string;
  private model: string;


  get manufacturers(): string {
    return this.manufacturer;
  }

  set manufacturers(value: string) {
    this.manufacturer = value;
  }

  get models(): string {
    return this.model;
  }

  set models(value: string) {
    this.model = value;
  }
}
