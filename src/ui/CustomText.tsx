import React from "react";
import { Typography } from "@mui/material";
import { fontSize } from "../theme/Sizes";
import { useTheme } from "../theme/ThemeProvider";

const CustomText: React.FC<{ text: string }> = ({ text }) => {
  const { theme } = useTheme();
  return (
    <Typography
      sx={{ fontSize: fontSize.text, margin: "20px auto", color: theme.font }}
    >
      {text}
    </Typography>
  );
};

export default CustomText;
