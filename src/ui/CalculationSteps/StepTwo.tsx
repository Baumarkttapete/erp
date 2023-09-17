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
import { useIntl } from "react-intl";
import Subtitle from "../Subtitle";

const StepTwo: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
  riskData: RiskData[];
  onChange: (triangleData: TriangleData, riskData: RiskData[]) => void;
}> = ({ userData, triangleData, riskData, onChange }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  const [time, setTime] = useState(triangleData.time);
  const [cost, setCost] = useState(triangleData.cost);
  const [quality, setQuality] = useState(triangleData.quality);
  const [radarData, setRadarData] = useState([
    { name: intl.formatMessage({ id: "time" }), value: time, fullMark: 300 },
    { name: intl.formatMessage({ id: "cost" }), value: cost, fullMark: 300 },
    {
      name: intl.formatMessage({ id: "quality" }),
      value: quality,
      fullMark: 300,
    },
  ]);
  const [riskData_, setRiskData] = useState(riskData);

  useEffect(() => {
    setRadarData([
      { name: intl.formatMessage({ id: "time" }), value: time, fullMark: 300 },
      { name: intl.formatMessage({ id: "cost" }), value: cost, fullMark: 300 },
      {
        name: intl.formatMessage({ id: "quality" }),
        value: quality,
        fullMark: 300,
      },
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

  const handleSliderChange = (
    riskName: string,
    difference: number,
    sliderValue: number
  ) => {
    const valueChangeS = difference * 1;
    const valueChangeM = difference * 3;
    const valueChangeL = difference * 5;

    // Update the corresponding state (time, cost, or quality) based on the riskName
    if (riskName === intl.formatMessage({ id: "risk_datenmigration" })) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    } else if (riskName === intl.formatMessage({ id: "risk_zeitplan" })) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    } else if (riskName === intl.formatMessage({ id: "risk_anpassungen" })) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    } else if (riskName === intl.formatMessage({ id: "risk_ressourcen" })) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    } else if (
      riskName === intl.formatMessage({ id: "risk_unternehmensprozesse" })
    ) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    } else if (riskName === intl.formatMessage({ id: "risk_schnittstellen" })) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    } else if (riskName === intl.formatMessage({ id: "risk_anforderungen" })) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    } else if (
      riskName === intl.formatMessage({ id: "risk_schulungsaufwand" })
    ) {
      setTime(time + valueChangeM);
      setCost(cost + valueChangeM);
      setQuality(quality - valueChangeM);
      setNewSliderValue(riskName, sliderValue);
    }
  };

  return (
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <UserInfoCard userData={userData} showProjectData={true} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title text={"Risiken"} color={theme.font} />
        <Typography sx={{ color: theme.font }}>
          {intl.formatMessage({ id: "risk_infotext_diagram" })}
        </Typography>
        <Card sx={{ padding: "20px" }}>
          <CustomBarChart data={riskData} />
        </Card>
        <Subtitle text={"Auswirkungen"} color={theme.font} />
        <Typography sx={{ margin: "10px 0", color: theme.font }}>
          {intl.formatMessage({ id: "risk_infotext_radar" })}
        </Typography>
        <Typography sx={{ margin: "10px 0", color: theme.warning }}>
          {intl.formatMessage({ id: "risk_infotext_radar_warning" })}
        </Typography>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "30px 20px",
            justifyContent: "space-evenly",
          }}
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
