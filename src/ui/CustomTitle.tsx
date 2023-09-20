import { Typography } from "@mui/material";
import { useTheme } from "../theme/ThemeProvider";
import { fontSize } from "../theme/Sizes";

const CostumTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: fontSize.title,
        margin: "15px",
        color: theme.font,
      }}
    >
      {children}
    </Typography>
  );
};

export default CostumTitle;
