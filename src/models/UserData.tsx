export interface UserData {
  userQuantity: number;
  branch: string;
  region: string;
  softwareCost: number;
  serviceCost: number;
  hardwareCost: number;
}

export class UserData {
  userQuantity: number = 0;
  branch: string = "";
  region: string = "";
  softwareCost: number = 0;
  serviceCost: number = 0;
  hardwareCost: number = 0;

  constructor(
    userQuantity: number,
    branch: string,
    region: string,
    softwareCost: number,
    serviceCost: number,
    hardwareCost: number
  ) {
    this.userQuantity = userQuantity;
    this.branch = branch;
    this.region = region;
    this.serviceCost = serviceCost;
    this.softwareCost = softwareCost;
    this.hardwareCost = hardwareCost;
  }
}
