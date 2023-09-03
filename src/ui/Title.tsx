import React from "react";
import { Typography } from "@mui/material";

const Title: React.FC<{ text: string }> = ({ text }) => {
  return <Typography sx={{ margin: "24px" }}>{text}</Typography>;
};

export default Title;
