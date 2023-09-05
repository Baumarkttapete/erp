import { UserData } from "../../../models/UserData";
import InfoCard from "./InfoCard";
import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const InfoCardList: React.FC<{ userData: UserData }> = ({ userData }) => {
  const dataCostCard = {
    avatar: <EuroIcon />,
    title: "Kosten",
    data: [
      {
        name: "Software",
        value: Number(userData.softwareCost.toFixed(2)),
        color: "#0088FE",
        unit: " €",
      },
      {
        name: "Dienstleistung",
        value: Number(userData.serviceCost.toFixed(2)),
        color: "#FF8042",
        unit: " €",
      },
      {
        name: "Hardware",
        value: Number(userData.hardwareCost.toFixed(2)),
        color: "#FF1042",
        unit: " €",
      },
    ],
    dataSum: {
      name: "Gesamt",
      value: Number(
        (
          userData.hardwareCost +
          userData.softwareCost +
          userData.serviceCost
        ).toFixed(2)
      ),
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
        value: Number(userData.time.prework.toFixed(1)),
        color: "#0088FE",
        unit: " Monate",
      },
      {
        name: "Implementierung",
        value: Number(userData.time.implementation.toFixed(1)),
        color: "#FF8042",
        unit: " Monate",
      },
    ],
    dataSum: {
      name: "Gesamt",
      value: Number(
        (userData.time.prework + userData.time.implementation).toFixed(1)
      ),
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
        value: Number(userData.personal.intern.toFixed(1)),
        color: "#0088FE",
        unit: " Mitarbeiter",
      },
      {
        name: "Extern",
        value: Number(userData.personal.extern.toFixed(1)),
        color: "#FF8042",
        unit: " Berater",
      },
    ],
    dataSum: {
      name: "Gesamt",
      value: Number(
        (userData.time.prework + userData.time.implementation).toFixed(1)
      ),
      color: "transparent",
      unit: " Personen",
    },
    infoText:
      "Die Größe des Projektteams und der Einsatz von externen Beratern hängt stark von der Größe (z.B. gemessen an der Anzahl User) und der Komplexität (z.B. gemessen an der Anzahl der eingeführten Module oder an der Zahl der Standorte des Unternehmens) der Projekte ab. Entsprechend fällt der Aufwand für ERP-Projekte in verschiedenen Branchen auch sehr unterschiedlich aus.",
  };

  return (
    <>
      <InfoCard {...dataCostCard} />
      <InfoCard {...dataTimeCard} />
      <InfoCard {...dataPersonalCard} />
    </>
  );
};

export default InfoCardList;
