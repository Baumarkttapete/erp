import { UserData } from "../../../models/UserData";
import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoCardPie from "./InfoCardPie";
import { Box } from "@mui/material";

const InfoCardList: React.FC<{ userData: UserData }> = ({ userData }) => {
  const dataCostCard = {
    avatar: <EuroIcon />,
    title: "Kosten pro User",
    data: [
      {
        name: "Software",
        value: userData.softwareCost,
        valueFix: 2,
        color: "#0088FE",
        unit: " €",
      },
      {
        name: "Dienstleistung",
        value: userData.serviceCost,
        valueFix: 2,
        color: "#FF8042",
        unit: " €",
      },
      {
        name: "Hardware",
        value: userData.hardwareCost,
        valueFix: 2,
        color: "#FF1042",
        unit: " €",
      },
    ],
    dataSum: {
      name: "Gesamt",
      value:
        userData.hardwareCost + userData.softwareCost + userData.serviceCost,
      valueFix: 2,
      color: "transparent",
      unit: " €",
    },
    infoText:
      "Dies ist eine Beispielinfo für die InfoCard. Hier können weitere Details oder Informationen angezeigt werden.",
  };

  const dataTimeCard = {
    avatar: <AccessTimeIcon />,
    title: "Dauer",
    data: [
      {
        name: "Vorarbeit",
        value: userData.time.prework,
        valueFix: 1,
        color: "#0088FE",
        unit: " Monate",
      },
      {
        name: "Implementierung",
        value: userData.time.implementation,
        valueFix: 1,
        color: "#FF8042",
        unit: " Monate",
      },
    ],
    dataSum: {
      name: "Gesamt",
      value: userData.time.prework + userData.time.implementation,
      valueFix: 1,
      color: "transparent",
      unit: " Monate",
    },
    infoText:
      "Dies ist eine Beispielinfo für die InfoCard. Hier können weitere Details oder Informationen angezeigt werden.",
  };

  const dataPersonalCard = {
    avatar: <GroupsIcon />,
    title: "Personalbedarf im Projektteam",
    data: [
      {
        name: "Intern",
        value: userData.personal.intern,
        valueFix: 1,
        color: "#0088FE",
        unit: " Mitarbeiter",
      },
      {
        name: "Extern",
        value: userData.personal.extern,
        valueFix: 1,
        color: "#FF8042",
        unit: " Berater",
      },
    ],
    dataSum: {
      name: "Gesamt",
      value: userData.time.prework + userData.time.implementation,
      valueFix: 1,
      color: "transparent",
      unit: " Personen",
    },
    infoText:
      "Die Größe des Projektteams und der Einsatz von externen Beratern hängt stark von der Größe (z.B. gemessen an der Anzahl User) und der Komplexität (z.B. gemessen an der Anzahl der eingeführten Module oder an der Zahl der Standorte des Unternehmens) der Projekte ab. Entsprechend fällt der Aufwand für ERP-Projekte in verschiedenen Branchen auch sehr unterschiedlich aus.",
  };

  return (
    <Box sx={{ margin: "0 auto" }}>
      <InfoCardPie {...dataCostCard} />
      <InfoCardPie {...dataTimeCard} />
      <InfoCardPie {...dataPersonalCard} />
    </Box>
  );
};

export default InfoCardList;
