export class VehicleConditionData {
  private _mileage: number;
  private _vehicleOwner: number;


  get mileage(): number {
    return this._mileage;
  }

  set mileage(value: number) {
    this._mileage = value;
  }

  get vehicleOwner(): number {
    return this._vehicleOwner;
  }

  set vehicleOwner(value: number) {
    this._vehicleOwner = value;
  }
}
