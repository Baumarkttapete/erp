import React from "react";
import { TriangleData } from "../../models/TriangleData";
import { UserData } from "../../models/UserData";
import { Box, Card } from "@mui/material";

import CustomText from "../CustomText";
import Subtitle from "../Subtitle";
import Title from "../Title";
import CostCard from "./StepThree/CostCard";
import { softwareData } from "../../data/Cost";
import TimeCard from "./StepThree/TimeCard";
import PersonalCard from "./StepThree/PersonalCard";

const StepThree: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
}> = ({ userData, triangleData }) => {
  const calculatedCost = triangleData.cost;
  const calculatedDuration = triangleData.cost;
  const calculatedQuality = triangleData.quality;

  return (
    <Box sx={{ margin: "15px" }}>
      <Title text={"Zusammenfassung"} />

      <CustomText
        text={
          "Im folgenden finden Sie die ausgewählten und erreichneten Daten, die laut der Trovarit-Studie ERP-Implementierung aus dem Jahr 2018 auf Ihr ERP-Projekt zutreffend sind."
        }
      />

      <CustomText
        text={
          "Folgende Daten haben Sie im Schritt Benutzereingaben eingegeben:"
        }
      />
      <CustomText text={"Useranzahl: " + userData.userQuantity} />
      <CustomText text={"branche: " + userData.branch} />
      <CustomText text={"region: " + userData.region} />
      <Box sx={{ width: "100vh", display: "flex", flexWrap: "wrap" }}>
        <CostCard
          softwareCost={userData.softwareCost}
          serviceCost={userData.serviceCost}
          hardwareCost={userData.hardwareCost}
        />
        <TimeCard time={userData.time} />
        <PersonalCard personal={userData.personal} />
      </Box>

      <Card sx={{ margin: "10px" }}>
        <Subtitle text={"Personal"} />
        <CustomText
          text={
            "Anzahl interner Mitarbeiter: " +
            userData.personal.intern +
            " Mitarbeiter"
          }
        />
        <CustomText
          text={
            "Anzahl externer Mitarbeiter: " +
            userData.personal.extern +
            " Mitarbeiter"
          }
        />
      </Card>

      <p>Geschätzte Projektkosten: {calculatedCost}</p>
      <p>Geschätzte Projektdauer: {calculatedDuration}</p>
      <p>Geschätzte Projektqualität: {calculatedQuality}</p>
      <p>Vorgenommene Anpassungen:</p>
      <ul>
        <li>Anzahl der Nutzer: {userData.userQuantity}</li>
        <li>Branche: {userData.branch}</li>
        <li>Region: {userData.region}</li>
        <li>Zeit: {triangleData.time}</li>
        <li>Qualität: {triangleData.quality}</li>
        <li>Kosten: {triangleData.cost}</li>
      </ul>
    </Box>
  );
};

export default StepThree;
