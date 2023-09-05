import { Box, Typography } from "@mui/material";
import ColorBox from "./ColorBox";

const InfoCardRow: React.FC<{
  color: string;
  text: string;
  value: number;
  valueFix: number;
  unit: string;
}> = ({ color, text, value, valueFix, unit }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "15px 150px 50px 50px",
        gridGap: "5px",
        margin: "10px",
      }}
    >
      <ColorBox color={color} />
      <Typography sx={{ margin: "0px 5px" }}>{text}</Typography>
      <Typography
        sx={{
          textAlign: "end",
          margin: "0px 5px",
        }}
      >
        {value.toFixed(valueFix)}
      </Typography>
      <Typography sx={{ flex: 1, margin: "auto" }}>{unit}</Typography>
    </Box>
  );
};

export default InfoCardRow;
