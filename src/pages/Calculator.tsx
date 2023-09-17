import React from "react";
import { Box } from "@mui/material";
import CalcStepper from "../ui/CalculationSteps/CalcStepper";

const Calculator: React.FC<{}> = ({}) => {
  return (
    <Box sx={{ margin: "40px auto" }}>
      <CalcStepper />
    </Box>
  );
};

export default Calculator;
