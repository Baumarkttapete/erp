import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import { Typography } from "@mui/material";
import { fontSize } from "../theme/Sizes";

const CostumText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Typography
      sx={{
        padding: "10px",
        fontSize: fontSize.text,
        color: theme.font,
      }}
    >
      {children}
    </Typography>
  );
};

export default CostumText;
