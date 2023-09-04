import { Cost } from "../data/Cost";

export const getCost = (
  data: Cost,
  quantity: number,
  branch: string,
  region: string
) => {
  let quantityCost = 0;
  let branchCost = 0;
  let regionCost = 0;

  if (quantity < 100) {
    quantityCost = data.groesse.bis100Mitarbeiter;
  } else if (quantity < 500) {
    quantityCost = data.groesse.bis500Mitarbeiter;
  } else {
    quantityCost = data.groesse.ab500Mitarbeiter;
  }

  if (branch === "industrie") {
    branchCost = data.branche.industrie;
  } else if (branch === "handel") {
    branchCost = data.branche.handel;
  } else {
    branchCost = data.branche.dienstleistungen;
  }

  if (region === "D") {
    regionCost = data.region.d;
  } else if (region === "A") {
    regionCost = data.region.a;
  } else {
    regionCost = data.region.ch;
  }
  return (quantityCost + branchCost + regionCost) / 3;
};
