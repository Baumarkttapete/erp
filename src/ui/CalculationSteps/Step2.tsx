import React from "react";
import { UserData } from "../../models/UserData";
import { Box } from "@mui/material";
import CustomText from "../CustomText";
import Title from "../Title";
import InfoCardList from "./StepThree/InfoCardList";
import UserInfoCard from "./StepThree/UserInfoCard";
import { useTheme } from "../../theme/ThemeProvider";
import { useIntl } from "react-intl";

const Step2: React.FC<{
  userData: UserData;
}> = ({ userData }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  return (
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <UserInfoCard userData={userData} />
      <Title
        text={intl.formatMessage({ id: "step2_title" })}
        color={theme.font}
      />

      <CustomText text={intl.formatMessage({ id: "step2_infotext" })} />

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <InfoCardList userData={userData} />
      </Box>
    </Box>
  );
};

export default Step2;
