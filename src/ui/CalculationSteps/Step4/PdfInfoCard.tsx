import React from "react";
import { Text } from "@react-pdf/renderer";
import PdfTextSpan from "./PdfTextSpan";
import { pdfFontSizes } from "../../../theme/Sizes";
import { useTheme } from "../../../theme/ThemeProvider";

const PdfInfoCard: React.FC<{
  data: {
    name: string;
    amount: string;
    unit: string;
    percent: string;
    color: string;
  }[];
  title: string;
  infoText: string;
  color: string;
}> = ({ title, data, infoText, color }) => {
  const textStyle = {
    fontSize: pdfFontSizes.text,
    padding: "3px",
  };

  return (
    <div
      style={{
        margin: "5px",
        border: "1px solid grey",
        borderRadius: "8px",
        boxShadow: "3px 3px 3px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        color: color,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            margin: "10px",
            fontWeight: "bold",
            fontSize: pdfFontSizes.subtitle,
          }}
        >
          {title}
        </Text>
        <div style={{ margin: "15px" }}>
          {data.map((entry, index) => (
            <React.Fragment key={index}>
              {index === data.length - 1 && (
                <div style={{ borderTop: "1px solid grey", width: "350px" }} />
              )}
              <PdfTextSpan
                title={entry.name}
                amount={entry.amount}
                unit={entry.unit}
                percent={entry.percent}
                color={entry.color}
              />
            </React.Fragment>
          ))}
        </div>
        <div style={{ margin: "15px", lineHeight: "1.5" }}>
          <Text style={textStyle}>{infoText}</Text>
        </div>
      </div>
      <div style={{ margin: "40px" }}>
        <Text
          style={{
            fontSize: pdfFontSizes.text,
            color: color,
          }}
        ></Text>
      </div>
    </div>
  );
};

export default PdfInfoCard;
