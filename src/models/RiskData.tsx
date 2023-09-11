export interface RiskData {
  name: string;
  value: number;
  sliderValue: number;
  info: string;
  infoCost: string;
  infoTime: string;
  infoQuality: string;
}

export class RiskData {
  name: string;
  value: number;
  sliderValue: number;
  info: string;
  infoCost: string;
  infoTime: string;
  infoQuality: string;

  constructor(
    name: string,
    value: number,
    sliderValue: number,
    info: string,
    infoCost: string,
    infoTime: string,
    infoQuality: string
  ) {
    this.name = name;
    this.value = value;
    this.sliderValue = sliderValue;
    this.info = info;
    this.infoCost = infoCost;
    this.infoTime = infoTime;
    this.infoQuality = infoQuality;
  }
}
