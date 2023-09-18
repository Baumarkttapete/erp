import React from "react";
import { UserData } from "../../models/UserData";
import { Box } from "@mui/material";
import CustomText from "../CustomText";
import Title from "../Title";
import InfoCardList from "./StepThree/InfoCardList";
import UserInfoCard from "./StepThree/UserInfoCard";
import { useTheme } from "../../theme/ThemeProvider";

const StepThree: React.FC<{
  userData: UserData;
}> = ({ userData }) => {
  const { theme } = useTheme();

  return (
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <UserInfoCard userData={userData} />
      <Title text={"Zusammenfassung"} color={theme.font} />

      <CustomText
        text={
          "Im folgenden finden Sie die ausgewählten und erreichneten Daten, die laut der Trovarit-Studie ERP-Implementierung aus dem Jahr 2018 auf Ihr ERP-Projekt zutreffend sind."
        }
      />

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <InfoCardList userData={userData} />
      </Box>
    </Box>
  );
};

export default StepThree;
