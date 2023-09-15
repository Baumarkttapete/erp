import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTheme } from "../../theme/ThemeProvider";

const HomeCard: React.FC<{ title: string; img: string; text: string }> = ({
  title,
  img,
  text,
}) => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  return (
    <Card sx={{ maxWidth: 345, margin: "20px 10px", flex: 1 }}>
      <CardHeader
        title={title}
        titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
      />
      <CardMedia component="img" height="110" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color={theme.font}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
