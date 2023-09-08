import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { TriangleData } from "../../models/TriangleData";
import CustomBarChart from "./StepTwo/CustomBarChart";
import { Risk, RiskData } from "../../data/Risks";
import UserInfoCard from "./StepThree/UserInfoCard";
import { UserData } from "../../models/UserData";
import Title from "../Title";
import RiskOptions from "./StepTwo/RiskOptions";
import CustomRadarChart from "./StepThree/CustomRadarChart";

const StepTwo: React.FC<{
  risks: Risk;
  userData: UserData;
  triangleData: TriangleData;
  onChange: (triangleData: TriangleData) => void;
}> = ({ risks, userData, triangleData, onChange }) => {
  const [time, setTime] = useState(triangleData.time);
  const [cost, setCost] = useState(triangleData.cost);
  const [quality, setQuality] = useState(triangleData.quality);
  const [radarData, setRadarData] = useState([
    { name: "Dauer", value: time, fullMark: 100 },
    { name: "Kosten", value: cost, fullMark: 100 },
    { name: "Qualität", value: quality, fullMark: 100 },
  ]);

  useEffect(() => {
    setRadarData([
      { name: "Dauer", value: time, fullMark: 100 },
      { name: "Kosten", value: cost, fullMark: 100 },
      { name: "Qualität", value: quality, fullMark: 100 },
    ]);
    onChange(new TriangleData(time, quality, cost));
  }, [time, cost, quality]);

  const handleSliderChange = (riskName: string, value: number) => {
    // Update the corresponding state (time, cost, or quality) based on the riskName
    if (riskName === "Datenmigration") {
      setTime(50 + value * 5);
      setCost(50 + value * 5);
      setQuality(50 - value * 5);
    } else if (riskName === "Knapper Zeitplan") {
      setCost(50 + value * 5);
    } else if (riskName === "Zu viele Anpassungen") {
      setQuality(50 + value * 5);
    } else if (riskName === "Ressourcen Anwender") {
      setQuality(50 + value * 5);
    } else if (riskName === "Abb. der Unternehmensprozesse") {
      setQuality(50 + value * 5);
    } else if (riskName === "Schnittstellen") {
      setQuality(50 + value * 5);
    } else if (riskName === "Anfoderungen unklar") {
      setQuality(50 + value * 5);
    } else if (riskName === "Schulungsauswand") {
      setQuality(50 + value * 5);
    }
  };

  const riskData: RiskData[] = [
    {
      name: "Datenmigration",
      value: risks.datenmigration,
      info: "Info zu Datenmigration",
      infoCost:
        "Zusätzliche Kosten: Um die Probleme mit der Datenmigration zu beheben, können zusätzliche Ressourcen, wie Experten für Datenkonvertierung oder spezialisierte Software, benötigt werden. Dies kann zu zusätzlichen Kosten für das Projekt führen.",
      infoTime:
        "Verlängerung der Projektdauer: Probleme mit der Datenmigration können dazu führen, dass mehr Zeit benötigt wird, um die notwendigen Daten zu übertragen und zu validieren. Dies kann zu einer Verzögerung des Projekts führen.",
      infoQuality:
        "Datenintegrität und Genauigkeit: Probleme mit der Datenmigration können die Integrität und Genauigkeit der übertragenen Daten beeinträchtigen. Dies könnte zu Fehlern oder Ungenauigkeiten in den Daten führen, was sich auf die Qualität des Projekts auswirkt.",
    },
    {
      name: "Knapper Zeitplan",
      value: risks.zeitplan,
      info: "infooo",
      infoCost: "lala",
      infoTime: "lala",
      infoQuality: "lalaaa",
    },
    {
      name: "Zu viele Anpassungen",
      value: risks.anpassungen,
      info: "infooo",
      infoCost: "lala",
      infoTime: "lala",
      infoQuality: "lalaaa",
    },
    {
      name: "Ressourcen Anwender",
      value: risks.ressourcen,
      info: "infooo",
      infoCost: "lala",
      infoTime: "lala",
      infoQuality: "lalaaa",
    },
    {
      name: "Abb. der Unternehmensprozesse",
      value: risks.abbildungProzesse,
      info: "infooo",
      infoCost: "lala",
      infoTime: "lala",
      infoQuality: "lalaaa",
    },
    {
      name: "Schnittstellen",
      value: risks.schnittstellen,
      info: "infooo",
      infoCost: "lala",
      infoTime: "lala",
      infoQuality: "lalaaa",
    },
    {
      name: "Anfoderungen unklar",
      value: risks.anforderungenUnklar,
      info: "infooo",
      infoCost: "lala",
      infoTime: "lala",
      infoQuality: "lalaaa",
    },
    {
      name: "Schulungsauswand",
      value: risks.schulungsaufwand,
      info: "infooo",
      infoCost: "lala",
      infoTime: "lala",
      infoQuality: "lalaaa",
    },
  ];

  return (
    <Box sx={{ margin: "60px" }}>
      <UserInfoCard userData={userData} showProjectData={true} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title text={"Risiken"} />
        <Typography sx={{ margin: "10px 0 " }}>
          Folgendes Balkendiagramm zeigt die Hauptprobleme während der
          Systemeinführung und den prozentualen Anteil der Unternehmen Ihrer
          Unternehmensgröße, auf die diese Probleme zutrafen.
        </Typography>
        <Card sx={{ padding: "20px" }}>
          <CustomBarChart data={riskData} />
        </Card>

        <Typography sx={{ margin: "10px 0 " }}>
          Sie haben nun die Möglichkeit, die möglichen Auswirkungen der oben
          genannten Hauptprobleme in das unten gezeigte Magische Dreieck
          einfließen zu lassen. Haken Sie dazu die Felder an, deren mögliche
          Auswirkungen Sie einfließen lassen möchten und geben Sie zusätzlich
          an, in welchem Ausmaß. Für genauere Infos hovern Sie über die
          jeweiligen Risiken.
        </Typography>
        <Typography sx={{ margin: "10px 0", color: "red" }}>
          Bei den Auswirkungen handelt es sich nur um Schätzungen!
        </Typography>
        <Card
          sx={{ display: "flex", flexDirection: "row", padding: "30px 20px" }}
        >
          <RiskOptions
            riskData={riskData}
            onSliderChange={handleSliderChange}
          />
          <CustomRadarChart data={radarData} />
        </Card>
      </Box>
    </Box>
  );
};

export default StepTwo;
