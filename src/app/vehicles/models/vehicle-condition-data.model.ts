export class VehicleConditionData {
  private mileage: number;


  get mileages(): number {
    return this.mileage;
  }

  set mileages(value: number) {
    this.mileage = value;
  }
}
