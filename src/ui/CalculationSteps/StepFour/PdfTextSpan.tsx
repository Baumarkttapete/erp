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
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "230px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "180px",
        }}
      >
        <Text style={textStyle}>{title}</Text>
        <Text style={textStyle}>{amount}</Text>
      </div>

      <Text style={textStyle}>{unit}</Text>
    </div>
  );
};

export default PdfTextSpan;
