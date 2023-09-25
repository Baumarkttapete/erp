import React, { useState } from "react";
import PdfExportBtn from "./Step4/PdfExportBtn";
import UserInfoCard from "./Step2/UserInfoCard";
import { UserData } from "../../models/UserData";
import { TriangleData } from "../../models/TriangleData";
import { RiskData } from "../../models/RiskData";
import { Box } from "@mui/material";
import { useTheme } from "../../theme/ThemeProvider";

import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CostumCheckbox from "./Step4/CustomCheckbox";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useIntl } from "react-intl";
import CostumText from "../CostumText";
import CostumTitle from "../CustomTitle";

const Step4: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
  riskData: RiskData[];
}> = ({ userData, triangleData, riskData }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  const [selectedContent, setSelectedContent] = useState<string[]>([]);
  const [isCheckedCost, setIsCheckedCost] = useState(true);
  const [isCheckedTime, setIsCheckedTime] = useState(true);
  const [isCheckedPersonal, setIsCheckedPersonal] = useState(true);
  const [isCheckedRisk, setIsCheckedRisk] = useState(true);

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    switch (label) {
      case intl.formatMessage({ id: "cost" }):
        setIsCheckedCost(isChecked);
        break;
      case intl.formatMessage({ id: "time" }):
        setIsCheckedTime(isChecked);
        break;
      case intl.formatMessage({ id: "personal" }):
        setIsCheckedPersonal(isChecked);
        break;
      case intl.formatMessage({ id: "risks" }):
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
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <UserInfoCard userData={userData} showProjectData={true} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CostumTitle>{intl.formatMessage({ id: "pdf_export" })}</CostumTitle>
        <CostumText>{intl.formatMessage({ id: "step4_infotext" })}</CostumText>
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
            onChange={(e) =>
              handleCheckboxChange(
                intl.formatMessage({ id: "cost" }),
                e.target.checked
              )
            }
            text={intl.formatMessage({ id: "cost" })}
            icon={<EuroIcon />}
          />
          <CostumCheckbox
            isChecked={isCheckedTime}
            onChange={(e) =>
              handleCheckboxChange(
                intl.formatMessage({ id: "time" }),
                e.target.checked
              )
            }
            text={intl.formatMessage({ id: "time" })}
            icon={<AccessTimeIcon />}
          />
          <CostumCheckbox
            isChecked={isCheckedPersonal}
            onChange={(e) =>
              handleCheckboxChange(
                intl.formatMessage({ id: "personal" }),
                e.target.checked
              )
            }
            text={intl.formatMessage({ id: "personal" })}
            icon={<GroupsIcon />}
          />
          <CostumCheckbox
            isChecked={isCheckedRisk}
            onChange={(e) =>
              handleCheckboxChange(
                intl.formatMessage({ id: "risks" }),
                e.target.checked
              )
            }
            text={intl.formatMessage({ id: "risks" })}
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

export default Step4;
