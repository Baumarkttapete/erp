import React from "react";
import { Typography } from "@mui/material";

const Subtitle: React.FC<{ text: string; color: string }> = ({
  text,
  color,
}) => {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: "20px",
        margin: "15px",
        color: color,
      }}
    >
      {text}
    </Typography>
  );
};

export default Subtitle;
