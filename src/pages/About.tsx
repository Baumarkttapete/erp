import React from "react";
import Title from "../ui/Title";
import { useTheme } from "../theme/ThemeProvider";
import { Box, Typography } from "@mui/material";

const About: React.FC<{}> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Title text="About" color={theme.font} />
      <Box sx={{ margin: "40px" }}>
        <Typography paragraph sx={{ color: theme.font }}>
          Diese Anwendung ist im Rahmen der Bachelorarbeit zum Thema
          "Usability-fokussierte Entwicklung einer Anwendung zur
          Kostenkalkulation von ERP-Einführungsprojekten" an der Hochschule für
          Wirtschaft und Recht Berlin entstanden und durch Bianca Stodieck
          entwickelt worden.
        </Typography>
        <Typography paragraph sx={{ color: theme.font }}>
          Das Ziel ist es, Unternehmen dabei zu unterstützen, die Kosten für die
          Einführung eines ERP-Systems besser abzuschätzen und transparenter zu
          gestalten.
        </Typography>
      </Box>
    </>
  );
};

export default About;
