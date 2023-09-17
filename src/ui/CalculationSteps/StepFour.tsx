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
  const [isCheckedDaten, setIsCheckedDaten] = useState(true);
  const [isCheckedRisiken, setIsCheckedRisiken] = useState(true);
  const [isCheckedSubDaten1, setIsCheckedSubDaten1] = useState(true);
  const [isCheckedSubDaten2, setIsCheckedSubDaten2] = useState(true);
  const [isCheckedSubDaten3, setIsCheckedSubDaten3] = useState(true);
  const [isCheckedSubRisiken1, setIsCheckedSubRisiken1] = useState(true);
  const [isCheckedSubRisiken2, setIsCheckedSubRisiken2] = useState(true);

  const handleMasterCheckboxChange = (content: string, isChecked: boolean) => {
    if (content === "Daten") {
      setIsCheckedDaten(isChecked);
      setIsCheckedSubDaten1(isChecked);
      setIsCheckedSubDaten2(isChecked);
      setIsCheckedSubDaten3(isChecked);
    } else if (content === "Risiken") {
      setIsCheckedRisiken(isChecked);
      setIsCheckedSubRisiken1(isChecked);
      setIsCheckedSubRisiken2(isChecked);
    }

    if (isChecked) {
      setSelectedContent([...selectedContent, content]);
    } else {
      setSelectedContent(selectedContent.filter((item) => item !== content));
    }
  };

  const exportContent = selectedContent.join("\n");

  return (
    <Box sx={{ margin: "40px auto" }}>
      <UserInfoCard userData={userData} showProjectData={true} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title text={"PDF Export"} color={theme.font} />
        <Typography sx={{ color: theme.font }}>
          Bitte wähle die Inhalte aus, die in der PDF enthalten sein sollen und
          klicke anschließend auf den Button "Export als PDF".
        </Typography>
        <Card
          sx={{
            margin: "20px auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ margin: "30px", display: "flex", flexDirection: "row" }}>
            <Checkbox
              onChange={(e) =>
                handleMasterCheckboxChange("Daten", e.target.checked)
              }
              checked={isCheckedDaten}
            />
            <Typography sx={{ margin: "auto" }}>Daten</Typography>
          </Box>
          <Box>
            <CostumCheckbox
              isChecked={isCheckedSubDaten1}
              onChange={(e) => setIsCheckedSubDaten1(e.target.checked)}
              disabled={!isCheckedDaten}
              text="Kosten"
              icon={<EuroIcon />}
            />
            <CostumCheckbox
              isChecked={isCheckedSubDaten2}
              onChange={(e) => setIsCheckedSubDaten2(e.target.checked)}
              disabled={!isCheckedDaten}
              text="Dauer"
              icon={<AccessTimeIcon />}
            />
            <CostumCheckbox
              isChecked={isCheckedSubDaten3}
              onChange={(e) => setIsCheckedSubDaten3(e.target.checked)}
              disabled={!isCheckedDaten}
              text="Personalbedarf im Kernteam"
              icon={<GroupsIcon />}
            />
          </Box>
        </Card>
        <Card
          sx={{
            margin: "20px auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ margin: "30px", display: "flex", flexDirection: "row" }}>
            <Checkbox
              onChange={(e) =>
                handleMasterCheckboxChange("Risiken", e.target.checked)
              }
              checked={isCheckedRisiken}
            />
            <Typography sx={{ margin: "auto" }}>Risiken</Typography>
          </Box>
          <Box>
            <CostumCheckbox
              isChecked={isCheckedSubRisiken1}
              onChange={(e) => setIsCheckedSubRisiken1(e.target.checked)}
              disabled={!isCheckedRisiken}
              text="Darstellung Hauptprobleme"
              icon={<ReportProblemIcon />}
            />
            <CostumCheckbox
              isChecked={isCheckedSubRisiken2}
              onChange={(e) => setIsCheckedSubRisiken2(e.target.checked)}
              disabled={!isCheckedRisiken}
              text="Auswirkungen und Magisches Dreieck"
              icon={<DisplaySettingsIcon />}
            />
          </Box>
        </Card>
        <PdfExportBtn data={exportContent} />
      </Box>
    </Box>
  );
};

export default StepFour;
