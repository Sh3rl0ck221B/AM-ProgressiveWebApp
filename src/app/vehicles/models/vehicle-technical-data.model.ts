export class VehicleTechnicalData {

  private _power: number;
  private _typeOfFuel: string;
  private _gearType: string;
  private _consumption: number;
  private _environmentalBadge: string;

  get power(): number {
    return this._power;
  }

  set power(value: number) {
    this._power = value;
  }

  get typeOfFuel(): string {
    return this._typeOfFuel;
  }

  set typeOfFuel(value: string) {
    this._typeOfFuel = value;
  }

  get gearType(): string {
    return this._gearType;
  }

  set gearType(value: string) {
    this._gearType = value;
  }

  get consumption(): number {
    return this._consumption;
  }

  set consumption(value: number) {
    this._consumption = value;
  }

  get environmentalBadge(): string {
    return this._environmentalBadge;
  }

  set environmentalBadge(value: string) {
    this._environmentalBadge = value;
  }

}
