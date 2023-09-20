import React from "react";
import { UserData } from "../../models/UserData";
import { Box } from "@mui/material";
import InfoCardList from "./Step2/InfoCardList";
import UserInfoCard from "./Step2/UserInfoCard";
import { useTheme } from "../../theme/ThemeProvider";
import { useIntl } from "react-intl";
import CostumText from "../CostumText";
import CostumTitle from "../CustomTitle";

const Step2: React.FC<{
  userData: UserData;
}> = ({ userData }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  return (
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <UserInfoCard userData={userData} />
      <CostumTitle>{intl.formatMessage({ id: "step2_title" })}</CostumTitle>

      <CostumText>{intl.formatMessage({ id: "step2_infotext" })} </CostumText>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <InfoCardList userData={userData} />
      </Box>
    </Box>
  );
};

export default Step2;
