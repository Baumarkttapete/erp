import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import CostumText from "../CostumText";

const HomeCard: React.FC<{
  title: string;
  avatar: React.ReactNode;
  text: string;
}> = ({ title, avatar, text }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px 10px", flex: 1 }}>
      <CardHeader
        title={title}
        titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
        avatar={avatar}
      />

      <CardContent>
        <CostumText>{text}</CostumText>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
