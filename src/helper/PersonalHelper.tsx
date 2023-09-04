import {
  under100,
  under1000,
  under25,
  under300,
  under5,
  under50,
  under9,
} from "../data/Personal";

export const getPersonal = (quantity: number) => {
  let intern = 0;
  let extern = 0;

  if (quantity < 5) {
    intern = under5.intern;
    extern = under5.extern;
  } else if (quantity < 9) {
    intern = under9.intern;
    extern = under9.extern;
  } else if (quantity < 25) {
    intern = under25.intern;
    extern = under25.extern;
  } else if (quantity < 50) {
    intern = under50.intern;
    extern = under50.extern;
  } else if (quantity < 100) {
    intern = under100.intern;
    extern = under100.extern;
  } else if (quantity < 300) {
    intern = under300.intern;
    extern = under300.extern;
  } else {
    intern = under1000.intern;
    extern = under1000.extern;
  }

  return { intern, extern };
};
