import React from "react";
import { Text } from "@react-pdf/renderer";
import PdfRiskSpan from "./PdfRiskSpan";
import { pdfFontSizes } from "../../../theme/Sizes";

const PdfRiskCard: React.FC<{
  data: { name: string; amount: string; infoText: string }[];
  title: string;
  color: string;
}> = ({ title, data, color }) => {
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
            color: color,
          }}
        >
          {title}
        </Text>
        <div style={{ margin: "15px" }}>
          {data.map((entry, index) => (
            <React.Fragment key={index}>
              <PdfRiskSpan
                title={entry.name}
                amount={entry.amount}
                infoText={entry.infoText}
                color={color}
              />
              {index !== data.length - 1 && (
                <div style={{ borderTop: "1px solid grey", width: "500px" }} />
              )}
              {index === 5 && <div style={{ height: "100px" }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PdfRiskCard;
