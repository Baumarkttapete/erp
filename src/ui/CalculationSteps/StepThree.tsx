import React from "react";
import { TriangleData } from "../../models/TriangleData";
import { UserData } from "../../models/UserData";
import { Box } from "@mui/material";

import CustomText from "../CustomText";
import Subtitle from "../Subtitle";
import Title from "../Title";

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
      <Subtitle text={"Kosten"} />

      <CustomText text={"Useranzahl: " + userData.userQuantity} />
      <CustomText text={"branche: " + userData.branch} />
      <CustomText text={"region: " + userData.region} />

      <CustomText text={"Softwarekosten: " + userData.softwareCost} />
      <CustomText text={"Dienstleistungskosten: " + userData.serviceCost} />
      <CustomText text={"Hardwarekosten: " + userData.hardwareCost} />

      <hr />

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
