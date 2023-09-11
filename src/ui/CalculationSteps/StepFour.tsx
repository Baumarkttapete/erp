import React from "react";
import PdfExportBtn from "./StepFour/PdfExportBtn";
import UserInfoCard from "./StepThree/UserInfoCard";
import { UserData } from "../../models/UserData";
import { TriangleData } from "../../models/TriangleData";
import { RiskData } from "../../models/RiskData";

const StepFour: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
  riskData: RiskData[];
}> = ({ userData, triangleData, riskData }) => {
  return (
    <>
      <UserInfoCard userData={userData} />
      <PdfExportBtn data={"hallo ich bin der bert"} />
    </>
  );
};

export default StepFour;
