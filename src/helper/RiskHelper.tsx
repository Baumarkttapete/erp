import { IntlShape, useIntl } from "react-intl";
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

export const getRiskData = (
  intl: IntlShape,
  userData: UserData
): RiskData[] => {
  return [
    new RiskData(
      intl.formatMessage({ id: "risk_datenmigration" }),
      userData.risk.datenmigration,
      0,
      intl.formatMessage({ id: "risk_datenmigration_info" }),
      intl.formatMessage({ id: "risk_datenmigration_info_cost" }),
      intl.formatMessage({ id: "risk_datenmigration_info_time" }),
      intl.formatMessage({ id: "risk_datenmigration_info_quality" })
    ),
    new RiskData(
      intl.formatMessage({ id: "risk_zeitplan" }),
      userData.risk.zeitplan,
      0,
      intl.formatMessage({ id: "risk_zeitplan_info" }),
      intl.formatMessage({ id: "risk_zeitplan_info_cost" }),
      intl.formatMessage({ id: "risk_zeitplan_info_time" }),
      intl.formatMessage({ id: "risk_zeitplan_info_quality" })
    ),
    new RiskData(
      intl.formatMessage({ id: "risk_anpassungen" }),
      userData.risk.anpassungen,
      0,
      intl.formatMessage({ id: "risk_anpassungen_info" }),
      intl.formatMessage({ id: "risk_anpassungen_info_cost" }),
      intl.formatMessage({ id: "risk_anpassungen_info_time" }),
      intl.formatMessage({ id: "risk_anpassungen_info_quality" })
    ),
    new RiskData(
      intl.formatMessage({ id: "risk_ressourcen" }),
      userData.risk.ressourcen,
      0,
      intl.formatMessage({ id: "risk_ressourcen_info" }),
      intl.formatMessage({ id: "risk_ressourcen_info_cost" }),
      intl.formatMessage({ id: "risk_ressourcen_info_time" }),
      intl.formatMessage({ id: "risk_ressourcen_info_quality" })
    ),
    new RiskData(
      intl.formatMessage({ id: "risk_unternehmensprozesse" }),
      userData.risk.abbildungProzesse,
      0,
      intl.formatMessage({ id: "risk_unternehmensprozesse_info" }),
      intl.formatMessage({ id: "risk_unternehmensprozesse_info_cost" }),
      intl.formatMessage({ id: "risk_unternehmensprozesse_info_time" }),
      intl.formatMessage({ id: "risk_unternehmensprozesse_info_quality" })
    ),
    new RiskData(
      intl.formatMessage({ id: "risk_schnittstellen" }),
      userData.risk.schnittstellen,
      0,
      intl.formatMessage({ id: "risk_schnittstellen_info" }),
      intl.formatMessage({ id: "risk_schnittstellen_info_cost" }),
      intl.formatMessage({ id: "risk_schnittstellen_info_time" }),
      intl.formatMessage({ id: "risk_schnittstellen_info_quality" })
    ),
    new RiskData(
      intl.formatMessage({ id: "risk_anforderungen" }),
      userData.risk.anforderungenUnklar,
      0,
      intl.formatMessage({ id: "risk_anforderungen_info" }),
      intl.formatMessage({ id: "risk_anforderungen_info_cost" }),
      intl.formatMessage({ id: "risk_anforderungen_info_time" }),
      intl.formatMessage({ id: "risk_anforderungen_info_quality" })
    ),
    new RiskData(
      intl.formatMessage({ id: "risk_schulungsaufwand" }),
      userData.risk.schulungsaufwand,
      0,
      intl.formatMessage({ id: "risk_schulungsaufwand_info" }),
      intl.formatMessage({ id: "risk_schulungsaufwand_info_cost" }),
      intl.formatMessage({ id: "risk_schulungsaufwand_info_time" }),
      intl.formatMessage({ id: "risk_schulungsaufwand_info_quality" })
    ),
  ];
};
