import React, { useState } from "react";
import PdfExportBtn from "./StepFour/PdfExportBtn";
import UserInfoCard from "./StepThree/UserInfoCard";
import { UserData } from "../../models/UserData";
import { TriangleData } from "../../models/TriangleData";
import { RiskData } from "../../models/RiskData";
import { Box, Card, Typography, Checkbox } from "@mui/material"; // Import der Checkbox
import Title from "../Title";
import { useTheme } from "../../theme/ThemeProvider";

const StepFour: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
  riskData: RiskData[];
}> = ({ userData, triangleData, riskData }) => {
  const { theme, setTheme } = useTheme();

  const [selectedContent, setSelectedContent] = useState<string[]>([]);
  const [isCheckedDaten, setIsCheckedDaten] = useState(false);
  const [isCheckedRisiken, setIsCheckedRisiken] = useState(false);
  const [isCheckedSubDaten1, setIsCheckedSubDaten1] = useState(false);
  const [isCheckedSubDaten2, setIsCheckedSubDaten2] = useState(false);
  const [isCheckedSubDaten3, setIsCheckedSubDaten3] = useState(false);
  const [isCheckedSubRisiken1, setIsCheckedSubRisiken1] = useState(false);
  const [isCheckedSubRisiken2, setIsCheckedSubRisiken2] = useState(false);
  const [isCheckedSubRisiken3, setIsCheckedSubRisiken3] = useState(false);

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
      setIsCheckedSubRisiken3(isChecked);
    }

    if (isChecked) {
      setSelectedContent([...selectedContent, content]);
    } else {
      setSelectedContent(selectedContent.filter((item) => item !== content));
    }
  };

  const exportContent = selectedContent.join("\n");

  return (
    <Box sx={{ margin: "60px" }}>
      <UserInfoCard userData={userData} showProjectData={true} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Title text={"PDF Export"} color={theme.font} />
        <Typography sx={{ color: theme.font }}>
          Bitte wähle die Inhalte aus, die in der PDF enthalten sein sollen und
          klicke anschließend auf den Button "Export als PDF".
        </Typography>
        <Card sx={{ marginTop: "10px", width: "100%" }}>
          <Checkbox
            onChange={(e) =>
              handleMasterCheckboxChange("Daten", e.target.checked)
            }
            checked={isCheckedDaten}
          />
          Daten
          <Checkbox
            onChange={(e) => setIsCheckedSubDaten1(e.target.checked)}
            checked={isCheckedSubDaten1}
            disabled={!isCheckedDaten}
          />
          SubDaten1
          <Checkbox
            onChange={(e) => setIsCheckedSubDaten2(e.target.checked)}
            checked={isCheckedSubDaten2}
            disabled={!isCheckedDaten}
          />
          SubDaten2
          <Checkbox
            onChange={(e) => setIsCheckedSubDaten3(e.target.checked)}
            checked={isCheckedSubDaten3}
            disabled={!isCheckedDaten}
          />
          SubDaten3
        </Card>
        <Card sx={{ marginTop: "10px", width: "100%" }}>
          <Checkbox
            onChange={(e) =>
              handleMasterCheckboxChange("Risiken", e.target.checked)
            }
            checked={isCheckedRisiken}
          />
          Risiken
          <Checkbox
            onChange={(e) => setIsCheckedSubRisiken1(e.target.checked)}
            checked={isCheckedSubRisiken1}
            disabled={!isCheckedRisiken}
          />
          SubRisiken1
          <Checkbox
            onChange={(e) => setIsCheckedSubRisiken2(e.target.checked)}
            checked={isCheckedSubRisiken2}
            disabled={!isCheckedRisiken}
          />
          SubRisiken2
          <Checkbox
            onChange={(e) => setIsCheckedSubRisiken3(e.target.checked)}
            checked={isCheckedSubRisiken3}
            disabled={!isCheckedRisiken}
          />
          SubRisiken3
        </Card>
        <PdfExportBtn data={exportContent} />
      </Box>
    </Box>
  );
};

export default StepFour;
