import React from "react";
import { Checkbox, Card } from "@mui/material";
import { useTheme } from "../../../theme/ThemeProvider";
import CostumText from "../../CostumText";

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
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Checkbox
        onChange={onChange}
        checked={isChecked}
        style={{ color: theme.secondary }}
      />
      {icon}
      <CostumText>{text}</CostumText>
    </Card>
  );
};

export default CostumCheckbox;
