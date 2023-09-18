import React from "react";
import { Checkbox, Typography, Card } from "@mui/material";
import { useTheme } from "../../../theme/ThemeProvider";

interface CostCheckboxProps {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  text: string;
  icon: React.ReactElement;
}

const CostumCheckbox: React.FC<CostCheckboxProps> = ({
  isChecked,
  onChange,
  text,
  icon,
}) => {
  const { theme } = useTheme();

  return (
    <Card sx={{ display: "flex", alignItems: "center", margin: "10px" }}>
      <Checkbox onChange={onChange} checked={isChecked} />
      {icon}
      <Typography sx={{ color: theme.font, margin: "15px 20px" }}>
        {text}
      </Typography>
    </Card>
  );
};

export default CostumCheckbox;
