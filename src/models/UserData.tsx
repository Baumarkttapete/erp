import { Personal } from "../data/Personal";
import { Risk } from "../data/Risks";
import { Time } from "../data/Time";

export interface UserData {
  userQuantity: number;
  branch: string;
  region: string;
  softwareCost: number;
  serviceCost: number;
  hardwareCost: number;
  personal: Personal;
  time: Time;
  risk: Risk;
}

export class UserData {
  userQuantity: number;
  branch: string;
  region: string;
  softwareCost: number;
  serviceCost: number;
  hardwareCost: number;
  personal: Personal;
  time: Time;
  risk: Risk;

  constructor(
    userQuantity: number,
    branch: string,
    region: string,
    softwareCost: number,
    serviceCost: number,
    hardwareCost: number,
    personal: Personal,
    time: Time,
    risk: Risk
  ) {
    this.userQuantity = userQuantity;
    this.branch = branch;
    this.region = region;
    this.serviceCost = serviceCost;
    this.softwareCost = softwareCost;
    this.hardwareCost = hardwareCost;
    this.personal = personal;
    this.time = time;
    this.risk = risk;
  }
}
