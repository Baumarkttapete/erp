import React from "react";
import { Typography } from "@mui/material";

const Title: React.FC<{ text: string; color: string }> = ({ text, color }) => {
  return (
    <Typography
      sx={{
        padding: "30px",
        fontWeight: "bold",
        fontSize: "20px",
        color: color,
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
