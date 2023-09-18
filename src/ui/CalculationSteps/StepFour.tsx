import React, { useState } from "react";
import PdfExportBtn from "./StepFour/PdfExportBtn";
import UserInfoCard from "./StepThree/UserInfoCard";
import { UserData } from "../../models/UserData";
import { TriangleData } from "../../models/TriangleData";
import { RiskData } from "../../models/RiskData";
import { Box, Card, Typography, Checkbox } from "@mui/material";
import Title from "../Title";
import { useTheme } from "../../theme/ThemeProvider";

import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CostumCheckbox from "./StepFour/CustomCheckbox";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

const StepFour: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
  riskData: RiskData[];
}> = ({ userData, triangleData, riskData }) => {
  const { theme } = useTheme();

  const [selectedContent, setSelectedContent] = useState<string[]>([]);
  const [isCheckedCost, setIsCheckedCost] = useState(true);
  const [isCheckedTime, setIsCheckedTime] = useState(true);
  const [isCheckedPersonal, setIsCheckedPersonal] = useState(true);
  const [isCheckedRisk, setIsCheckedRisk] = useState(true);

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    switch (label) {
      case "Cost":
        setIsCheckedCost(isChecked);
        break;
      case "Time":
        setIsCheckedTime(isChecked);
        break;
      case "Personal":
        setIsCheckedPersonal(isChecked);
        break;
      case "Risk":
        setIsCheckedRisk(isChecked);
        break;
      default:
        break;
    }

    if (isChecked) {
      setSelectedContent([...selectedContent, label]);
    } else {
      setSelectedContent(selectedContent.filter((item) => item !== label));
    }
  };

  return (
    <Box sx={{ margin: "40px auto" }}>
      <UserInfoCard userData={userData} showProjectData={true} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title text={"PDF Export"} color={theme.font} />
        <Typography sx={{ color: theme.font }}>
          Bitte wähle die Inhalte aus, die in der PDF enthalten sein sollen und
          klicke anschließend auf den Button "Export als PDF".
        </Typography>
        <Box
          sx={{
            margin: "20px auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <CostumCheckbox
            isChecked={isCheckedCost}
            onChange={(e) => handleCheckboxChange("Cost", e.target.checked)}
            text="Kosten"
            icon={<EuroIcon />}
          />
          <CostumCheckbox
            isChecked={isCheckedTime}
            onChange={(e) => handleCheckboxChange("Time", e.target.checked)}
            text="Time"
            icon={<AccessTimeIcon />}
          />
          <CostumCheckbox
            isChecked={isCheckedPersonal}
            onChange={(e) => handleCheckboxChange("Personal", e.target.checked)}
            text="Personal"
            icon={<GroupsIcon />}
          />
          <CostumCheckbox
            isChecked={isCheckedRisk}
            onChange={(e) => handleCheckboxChange("Risk", e.target.checked)}
            text="Risk"
            icon={<ReportProblemIcon />}
          />
        </Box>

        <PdfExportBtn
          userData={userData}
          isCheckedCost={isCheckedCost}
          isCheckedTime={isCheckedTime}
          isCheckedPersonal={isCheckedPersonal}
          isCheckedRisk={isCheckedRisk}
        />
      </Box>
    </Box>
  );
};

export default StepFour;
