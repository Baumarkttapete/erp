import React from "react";
import { Text } from "@react-pdf/renderer";
import { pdfFontSizes } from "../../../theme/Sizes";

const PdfTextSpan: React.FC<{
  title: string;
  amount: string;
  unit: string;
  percent: string;
  color: string;
}> = ({ title, amount, unit, percent, color }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "350px",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: pdfFontSizes.text,
          padding: "3px",
          color: color,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: pdfFontSizes.text,
            padding: "3px",
            fontWeight: "bold",
            color: color,
          }}
        >
          {amount}
        </Text>
        <Text
          style={{
            fontSize: pdfFontSizes.text,
            padding: "3px",
            fontWeight: "bold",
            color: color,
          }}
        >
          {unit}
        </Text>
        <Text
          style={{
            fontSize: pdfFontSizes.text,
            padding: "3px 20px",
            fontWeight: "bold",
            color: color,
          }}
        >
          {percent}
        </Text>
      </div>
    </div>
  );
};

export default PdfTextSpan;
