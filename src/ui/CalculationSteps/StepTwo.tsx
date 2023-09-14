import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { TriangleData } from "../../models/TriangleData";
import CustomBarChart from "./StepTwo/CustomBarChart";
import UserInfoCard from "./StepThree/UserInfoCard";
import { UserData } from "../../models/UserData";
import Title from "../Title";
import RiskOptions from "./StepTwo/RiskOptions";
import CustomRadarChart from "./StepThree/CustomRadarChart";
import { RiskData } from "../../models/RiskData";
import { useTheme } from "../../theme/ThemeProvider";

const StepTwo: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
  riskData: RiskData[];
  onChange: (triangleData: TriangleData, riskData: RiskData[]) => void;
}> = ({ userData, triangleData, riskData, onChange }) => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  const [time, setTime] = useState(triangleData.time);
  const [cost, setCost] = useState(triangleData.cost);
  const [quality, setQuality] = useState(triangleData.quality);
  const [radarData, setRadarData] = useState([
    { name: "Dauer", value: time, fullMark: 100 },
    { name: "Kosten", value: cost, fullMark: 100 },
    { name: "Qualität", value: quality, fullMark: 100 },
  ]);
  const [riskData_, setRiskData] = useState(riskData);

  useEffect(() => {
    console.log(riskData);
    setRadarData([
      { name: "Dauer", value: time, fullMark: 100 },
      { name: "Kosten", value: cost, fullMark: 100 },
      { name: "Qualität", value: quality, fullMark: 100 },
    ]);
    onChange(new TriangleData(time, quality, cost), riskData_);
  }, [time, cost, quality, riskData_]);

  const setNewSliderValue = (riskName: string, sliderValue: number) => {
    setRiskData((prevRiskData) => {
      const updatedRiskData = prevRiskData.map((risk) => {
        if (risk.name === riskName) {
          return { ...risk, sliderValue };
        }
        return risk;
      });

      return updatedRiskData;
    });
  };

  const handleSliderChange = (riskName: string, value: number) => {
    const valueChange = value * 5;
    // Update the corresponding state (time, cost, or quality) based on the riskName
    if (riskName === "Datenmigration") {
      setTime(time + valueChange);
      setCost(cost + valueChange);
      setQuality(quality - valueChange);
      setNewSliderValue(riskName, value);
    } else if (riskName === "Knapper Zeitplan") {
      setCost(cost + valueChange);
      setNewSliderValue(riskName, value);
    } else if (riskName === "Zu viele Anpassungen") {
      setQuality(quality + valueChange);
      setNewSliderValue(riskName, value);
    } else if (riskName === "Ressourcen Anwender") {
      setQuality(quality + valueChange);
      setNewSliderValue(riskName, value);
    } else if (riskName === "Abb. der Unternehmensprozesse") {
      setQuality(quality + valueChange);
      setNewSliderValue(riskName, value);
    } else if (riskName === "Schnittstellen") {
      setQuality(quality + valueChange);
      setNewSliderValue(riskName, value);
    } else if (riskName === "Anfoderungen unklar") {
      setQuality(quality + valueChange);
      setNewSliderValue(riskName, value);
    } else if (riskName === "Schulungsauswand") {
      setQuality(quality + valueChange);
      setNewSliderValue(riskName, value);
    }
  };

  return (
    <Box sx={{ margin: "60px" }}>
      <UserInfoCard userData={userData} showProjectData={true} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title text={"Risiken"} color={theme.font} />
        <Typography sx={{ margin: "10px 0", color: theme.font }}>
          Folgendes Balkendiagramm zeigt die Hauptprobleme während der
          Systemeinführung und den prozentualen Anteil der Unternehmen Ihrer
          Unternehmensgröße, auf die diese Probleme zutrafen.
        </Typography>
        <Card sx={{ padding: "20px" }}>
          <CustomBarChart data={riskData} />
        </Card>

        <Typography sx={{ margin: "10px 0", color: theme.font }}>
          Sie haben nun die Möglichkeit, die möglichen Auswirkungen der oben
          genannten Hauptprobleme in das unten gezeigte Magische Dreieck
          einfließen zu lassen. Haken Sie dazu die Felder an, deren mögliche
          Auswirkungen Sie einfließen lassen möchten und geben Sie zusätzlich
          an, in welchem Ausmaß. Für genauere Infos hovern Sie über die
          jeweiligen Risiken.
        </Typography>
        <Typography sx={{ margin: "10px 0", color: theme.warning }}>
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
