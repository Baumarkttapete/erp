import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTheme } from "../../theme/ThemeProvider";

const HomeCard: React.FC<{
  title: string;
  avatar: React.ReactNode;
  text: string;
}> = ({ title, avatar, text }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Card sx={{ maxWidth: 345, margin: "20px 10px", flex: 1 }}>
      <CardHeader
        title={title}
        titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
        avatar={avatar}
      />

      <CardContent>
        <Typography variant="body2" color={theme.font}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
