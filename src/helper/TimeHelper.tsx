import {
  under100,
  under1000,
  under25,
  under300,
  under50,
  under9,
} from "../data/Time";

export const getTime = (quantity: number) => {
  let implementation = 0;
  let prework = 0;

  if (quantity < 9) {
    implementation = under9.implementation;
    prework = under9.prework;
  } else if (quantity < 25) {
    implementation = under25.implementation;
    prework = under25.prework;
  } else if (quantity < 50) {
    implementation = under50.implementation;
    prework = under50.prework;
  } else if (quantity < 100) {
    implementation = under100.implementation;
    prework = under100.prework;
  } else if (quantity < 300) {
    implementation = under300.implementation;
    prework = under300.prework;
  } else {
    implementation = under1000.implementation;
    prework = under1000.prework;
  }

  return { implementation, prework };
};
