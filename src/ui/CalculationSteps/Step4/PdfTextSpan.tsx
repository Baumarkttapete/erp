import React from "react";
import { Text } from "@react-pdf/renderer";
import { fontSize } from "../../../theme/Sizes";

const PdfTextSpan: React.FC<{
  title: string;
  amount: string;
  unit: string;
}> = ({ title, amount, unit }) => {
  const textStyle = {
    fontSize: fontSize.text,
    padding: "3px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "210px",
        justifyContent: "space-between",
      }}
    >
      <Text style={textStyle}>{title}</Text>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={textStyle}>{amount}</Text>
        <Text style={textStyle}>{unit}</Text>
      </div>
    </div>
  );
};

export default PdfTextSpan;
