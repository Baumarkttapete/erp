import React from "react";
import { Text } from "@react-pdf/renderer";
import { fontSize } from "../../../theme/Sizes";
import PdfTextSpan from "./PdfTextSpan";

const PdfInfoCard: React.FC<{
  data: { name: string; amount: string; unit: string }[];
  title: string;
  infoText: string;
}> = ({ title, data, infoText }) => {
  const textStyle = {
    fontSize: fontSize.text,
    padding: "3px",
  };

  return (
    <div
      style={{
        margin: "5px",
        border: "1px solid grey",
        borderRadius: "8px",
        boxShadow: "3px 3px",
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
            fontSize: fontSize.subtitle,
          }}
        >
          {title}
        </Text>
        <div style={{ margin: "15px" }}>
          {data.map((entry, index) => (
            <React.Fragment key={index}>
              {index === data.length - 1 && (
                <div style={{ borderTop: "1px solid grey" }} />
              )}
              <PdfTextSpan
                title={entry.name}
                amount={entry.amount}
                unit={entry.unit}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ marginLeft: "40px" }}>
        <Text style={textStyle}>{infoText}</Text>
      </div>
    </div>
  );
};

export default PdfInfoCard;
