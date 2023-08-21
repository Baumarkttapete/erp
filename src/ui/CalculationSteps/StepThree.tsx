import React from "react";
import { TriangleData } from "../../models/TriangleData";
import { UserData } from "../../models/UserData";

const StepThree: React.FC<{
  userData: UserData;
  triangleData: TriangleData;
}> = ({ userData, triangleData }) => {
  const calculatedCost = userData.userQuantity * triangleData.cost;
  const calculatedDuration = triangleData.cost;
  const calculatedQuality = triangleData.quality;

  return (
    <div>
      <h2>Schritt 3: Projektzusammenfassung</h2>
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
    </div>
  );
};

export default StepThree;
