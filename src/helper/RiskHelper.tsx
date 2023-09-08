import { over500, under100, under500 } from "../data/Risks";

export const getRisk = (quantity: number) => {
  let datenmigration: number;
  let zeitplan: number;
  let anpassungen: number;
  let ressourcen: number;
  let abbildungProzesse: number;
  let schnittstellen: number;
  let anforderungenUnklar: number;
  let schulungsaufwand: number;

  if (quantity < 100) {
    datenmigration = under100.datenmigration;
    zeitplan = under100.zeitplan;
    anpassungen = under100.anpassungen;
    ressourcen = under100.ressourcen;
    abbildungProzesse = under100.abbildungProzesse;
    schnittstellen = under100.schnittstellen;
    anforderungenUnklar = under100.anforderungenUnklar;
    schulungsaufwand = under100.schulungsaufwand;
  } else if (quantity < 500) {
    datenmigration = under500.datenmigration;
    zeitplan = under500.zeitplan;
    anpassungen = under500.anpassungen;
    ressourcen = under500.ressourcen;
    abbildungProzesse = under500.abbildungProzesse;
    schnittstellen = under500.schnittstellen;
    anforderungenUnklar = under500.anforderungenUnklar;
    schulungsaufwand = under500.schulungsaufwand;
  } else {
    datenmigration = over500.datenmigration;
    zeitplan = over500.zeitplan;
    anpassungen = over500.anpassungen;
    ressourcen = over500.ressourcen;
    abbildungProzesse = over500.abbildungProzesse;
    schnittstellen = over500.schnittstellen;
    anforderungenUnklar = over500.anforderungenUnklar;
    schulungsaufwand = over500.schulungsaufwand;
  }

  return {
    datenmigration,
    zeitplan,
    anpassungen,
    ressourcen,
    abbildungProzesse,
    schnittstellen,
    anforderungenUnklar,
    schulungsaufwand,
  };
};
