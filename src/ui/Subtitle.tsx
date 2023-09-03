import React from "react";
import { Typography } from "@mui/material";

const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography sx={{ fontWeight: "bold", fontSize: "20px", margin: "15px" }}>
      {text}
    </Typography>
  );
};

export default Subtitle;
