import React from "react";
import { Text } from "@react-pdf/renderer";
import { pdfFontSizes } from "../../../theme/Sizes";
import { useTheme } from "../../../theme/ThemeProvider";

const PdfRiskSpan: React.FC<{
  title: string;
  amount: string;
  infoText: string;
  color: string;
}> = ({ title, amount, infoText, color }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        color: color,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "10px 0",
          width: "350px",
        }}
      >
        <Text
          style={{
            fontSize: pdfFontSizes.text,
            padding: "3px",
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
            }}
          >
            {amount}
          </Text>
        </div>
      </div>
      <Text
        style={{
          fontSize: pdfFontSizes.text,
          padding: "10px",
          lineHeight: "1.5",
        }}
      >
        {infoText}
      </Text>
    </div>
  );
};

export default PdfRiskSpan;
