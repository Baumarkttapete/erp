import React, { useEffect, useState } from "react";
import { Box, Card } from "@mui/material";
import { TriangleData } from "../../models/TriangleData";
import UserInfoCard from "./Step2/UserInfoCard";
import { UserData } from "../../models/UserData";
import RiskOptions from "./Step3/RiskOptions";
import CustomRadarChart from "./Step3/CustomRadarChart";
import { RiskData } from "../../models/RiskData";
import { useTheme } from "../../theme/ThemeProvider";
import { useIntl } from "react-intl";
import CostumText from "../CostumText";
import CostumSubtitle from "../CustomSubtitle";
import CostumTitle from "../CustomTitle";
import CustomBarChart from "./Step3/CustomBarChart";

const Step3: React.FC<{
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
        <CostumTitle>{intl.formatMessage({ id: "risks" })}</CostumTitle>
        <CostumText>
          {intl.formatMessage({ id: "risk_infotext_diagram" })}
        </CostumText>
        <Card sx={{ padding: "20px" }}>
          <CustomBarChart data={riskData} />
        </Card>
        <CostumSubtitle>{intl.formatMessage({ id: "effects" })}</CostumSubtitle>
        <CostumText>
          {intl.formatMessage({ id: "risk_infotext_radar" })}
        </CostumText>
        <CostumText>
          {intl.formatMessage({ id: "risk_infotext_radar_warning" })}
        </CostumText>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "30px 20px",
            justifyContent: "space-evenly",
            alignItems: "center",
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

export default Step3;
