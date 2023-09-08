import React from "react";
import { TriangleData } from "../../models/TriangleData";
import { UserData } from "../../models/UserData";
import { Box, Card, Paper, Typography } from "@mui/material";
import CustomText from "../CustomText";
import Title from "../Title";
import InfoCardList from "./StepThree/InfoCardList";
import UserInfoCard from "./StepThree/UserInfoCard";

const StepThree: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
}> = ({ userData, triangleData }) => {
  return (
    <Box sx={{ margin: "60px" }}>
      <UserInfoCard userData={userData} />
      <Title text={"Zusammenfassung"} />

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
