import { Personal } from "../data/Personal";
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
}

export class UserData {
  userQuantity: number = 0;
  branch: string = "";
  region: string = "";
  softwareCost: number = 0;
  serviceCost: number = 0;
  hardwareCost: number = 0;
  personal: Personal = { intern: 0, extern: 0 };
  time: Time = { implementation: 0, prework: 0 };

  constructor(
    userQuantity: number,
    branch: string,
    region: string,
    softwareCost: number,
    serviceCost: number,
    hardwareCost: number,
    personal: Personal,
    time: Time
  ) {
    this.userQuantity = userQuantity;
    this.branch = branch;
    this.region = region;
    this.serviceCost = serviceCost;
    this.softwareCost = softwareCost;
    this.hardwareCost = hardwareCost;
    this.personal = personal;
    this.time = time;
  }
}
