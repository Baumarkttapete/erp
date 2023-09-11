import { over500, under100, under500 } from "../data/Risks";
import { RiskData } from "../models/RiskData";
import { UserData } from "../models/UserData";

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

export const getRiskData = (userData: UserData): RiskData[] => {
  return [
    new RiskData(
      "Datenmigration",
      userData.risk.datenmigration,
      0,
      "Info zu Datenmigration",
      "Zusätzliche Kosten: Um die Probleme mit der Datenmigration zu beheben, können zusätzliche Ressourcen, wie Experten für Datenkonvertierung oder spezialisierte Software, benötigt werden. Dies kann zu zusätzlichen Kosten für das Projekt führen.",
      "Verlängerung der Projektdauer: Probleme mit der Datenmigration können dazu führen, dass mehr Zeit benötigt wird, um die notwendigen Daten zu übertragen und zu validieren. Dies kann zu einer Verzögerung des Projekts führen.",
      "Datenintegrität und Genauigkeit: Probleme mit der Datenmigration können die Integrität und Genauigkeit der übertragenen Daten beeinträchtigen. Dies könnte zu Fehlern oder Ungenauigkeiten in den Daten führen, was sich auf die Qualität des Projekts auswirkt."
    ),
    new RiskData(
      "Knapper Zeitplan",
      userData.risk.zeitplan,
      0,
      "infooo",
      "lala",
      "lala",
      "lalaaa"
    ),
    new RiskData(
      "Zu viele Anpassungen",
      userData.risk.anpassungen,
      0,
      "infooo",
      "lala",
      "lala",
      "lalaaa"
    ),
    new RiskData(
      "Ressourcen Anwender",
      userData.risk.ressourcen,
      0,
      "infooo",
      "lala",
      "lala",
      "lalaaa"
    ),
    new RiskData(
      "Abb. der Unternehmensprozesse",
      userData.risk.abbildungProzesse,
      0,
      "infooo",
      "lala",
      "lala",
      "lalaaa"
    ),
    new RiskData(
      "Schnittstellen",
      userData.risk.schnittstellen,
      0,
      "infooo",
      "lala",
      "lala",
      "lalaaa"
    ),
    new RiskData(
      "Anfoderungen unklar",
      userData.risk.anforderungenUnklar,
      0,
      "infooo",
      "lala",
      "lala",
      "lalaaa"
    ),
    new RiskData(
      "Schulungsauswand",
      userData.risk.schulungsaufwand,
      0,
      "infooo",
      "lala",
      "lala",
      "lalaaa"
    ),
  ];
};
