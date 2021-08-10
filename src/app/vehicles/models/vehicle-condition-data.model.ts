export class VehicleConditionData {
  private _mileage: number;
  private _vehicleOwner: number;
  private _nextTechnicalExamination: string;


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


  get nextTechnicalExamination(): string {
    return this._nextTechnicalExamination;
  }

  set nextTechnicalExamination(value: string) {
    this._nextTechnicalExamination = value;
  }
}
