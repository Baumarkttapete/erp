import React from "react";
import { Box } from "@mui/material";
import CostumText from "../ui/CostumText";
import CustomTitle from "../ui/CustomTitle";
import { useIntl } from "react-intl";

const About: React.FC<{}> = ({}) => {
  const intl = useIntl();

  return (
    <>
      <CustomTitle>{intl.formatMessage({ id: "about" })}</CustomTitle>
      <Box sx={{ margin: "40px" }}>
        <CostumText>
          Diese Anwendung ist im Rahmen der Bachelorarbeit zum Thema
          "Usability-fokussierte Entwicklung einer Anwendung zur
          Kostenkalkulation von ERP-Einführungsprojekten" an der Hochschule für
          Wirtschaft und Recht Berlin entstanden und durch Bianca Stodieck
          entwickelt worden.
        </CostumText>
        <CostumText>
          Das Ziel ist es, Unternehmen dabei zu unterstützen, die Kosten für die
          Einführung eines ERP-Systems besser abzuschätzen und transparenter zu
          gestalten.
        </CostumText>
      </Box>
    </>
  );
};

export default About;
