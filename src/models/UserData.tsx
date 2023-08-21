export interface UserData {
  userQuantity: number;
  branch: string;
  region: string;
}

export class UserData {
  userQuantity: number = 0;
  branch: string = "";
  region: string = "";

  constructor(userQuantity: number, branch: string, region: string) {
    this.userQuantity = userQuantity;
    this.branch = branch;
    this.region = region;
  }
}
