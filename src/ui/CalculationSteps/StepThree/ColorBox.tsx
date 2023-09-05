import React from "react";
import { Box } from "@mui/material";

const CostCard: React.FC<{
  color: string;
}> = ({ color }) => {
  return (
    <Box
      sx={{
        height: "20px",
        width: "20px",
        borderRadius: "4px",
        backgroundColor: color,
        margin: "auto auto",
      }}
    />
  );
};

export default CostCard;
