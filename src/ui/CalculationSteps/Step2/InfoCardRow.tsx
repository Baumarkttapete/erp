import { Box } from "@mui/material";
import ColorBox from "./ColorBox";
import { useTheme } from "../../../theme/ThemeProvider";
import CostumText from "../../CostumText";

const InfoCardRow: React.FC<{
  color: string;
  text: string;
  value: number;
  valueFix: number;
  unit: string;
  percent: string;
}> = ({ color, text, value, valueFix, unit, percent }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "15px 150px 50px 150px 50px",
        gridGap: "5px",
        margin: "10px",
      }}
    >
      <ColorBox color={color} />
      <CostumText>{text}</CostumText>
      <CostumText>{value.toFixed(valueFix)}</CostumText>
      <CostumText>{unit}</CostumText>
      <CostumText>{percent}</CostumText>
    </Box>
  );
};

export default InfoCardRow;
