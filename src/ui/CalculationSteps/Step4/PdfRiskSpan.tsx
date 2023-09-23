import React from "react";
import { Text } from "@react-pdf/renderer";
import { pdfFontSizes } from "../../../theme/Sizes";

const PdfRiskSpan: React.FC<{
  title: string;
  amount: string;
  infoText: string;
}> = ({ title, amount, infoText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "350px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "10px 0",
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
