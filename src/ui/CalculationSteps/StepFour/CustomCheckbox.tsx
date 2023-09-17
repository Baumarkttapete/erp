import React from "react";
import { Checkbox, Typography, Box } from "@mui/material";
import { useTheme } from "../../../theme/ThemeProvider";

interface CostCheckboxProps {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  text: string;
  icon: React.ReactElement;
}

const CostumCheckbox: React.FC<CostCheckboxProps> = ({
  isChecked,
  onChange,
  disabled,
  text,
  icon,
}) => {
  const { theme } = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Checkbox onChange={onChange} checked={isChecked} disabled={disabled} />
      {icon}
      <Typography sx={{ color: theme.font, margin: "20px" }}>{text}</Typography>
    </Box>
  );
};

export default CostumCheckbox;
