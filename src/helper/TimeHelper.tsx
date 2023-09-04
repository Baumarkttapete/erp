import {
  under100,
  under1000,
  under25,
  under300,
  under50,
  under9,
} from "../data/Time";

export const getTime = (quantity: number) => {
  let implementationTime = 0;
  let preworkTime = 0;

  if (quantity < 9) {
    implementationTime = under9.implementierung;
    preworkTime = under9.vorarbeiten;
  } else if (quantity < 25) {
    implementationTime = under25.implementierung;
    preworkTime = under25.vorarbeiten;
  } else if (quantity < 50) {
    implementationTime = under50.implementierung;
    preworkTime = under50.vorarbeiten;
  } else if (quantity < 100) {
    implementationTime = under100.implementierung;
    preworkTime = under100.vorarbeiten;
  } else if (quantity < 300) {
    implementationTime = under300.implementierung;
    preworkTime = under300.vorarbeiten;
  } else {
    implementationTime = under1000.implementierung;
    preworkTime = under1000.vorarbeiten;
  }

  return { implementationTime, preworkTime };
};
