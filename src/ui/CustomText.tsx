import React from "react";
import { Typography } from "@mui/material";

const CustomText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography sx={{ fontSize: "15px", margin: "10px" }}>{text}</Typography>
  );
};

export default CustomText;
