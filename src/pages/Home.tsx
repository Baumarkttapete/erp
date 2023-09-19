import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import routePaths from "../routePaths";
import HomeCard from "../ui/Home/HomeCard";
import ScrollBtn from "../ui/ScrollBtn";

import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const Home: React.FC<{}> = ({}) => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        margin: "40px auto",
        width: "80%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ScrollBtn scrollUp />
      <ScrollBtn scrollUp={false} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: theme.accent,
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Typography
          sx={{ fontSize: "60px", fontWeight: "bold", color: theme.font2 }}
        >
          ERP
        </Typography>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold", color: theme.font2 }}
        >
          Projekt | Implementierung | Einführung
        </Typography>
        <Divider sx={{ width: "70%", margin: "20px auto" }} />
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", color: theme.font }}
        >
          Was kommt bei auf mich zu?
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <HomeCard
          title={"Kosten"}
          avatar={<EuroIcon style={{ color: theme.secondary }} />}
          text={
            "Erfahren Sie, wie die Kosten für die ERP-Einführung pro Benutzer berechnet werden. Erhalten Sie einen Überblick über die finanziellen Aspekte und wie sie sich auf Ihr Unternehmen auswirken können."
          }
        />
        <HomeCard
          title={"Kernteam"}
          avatar={<GroupsIcon style={{ color: theme.secondary }} />}
          text={
            "Das Kernteam spielt eine entscheidende Rolle bei der erfolgreichen Umsetzung eines ERP-Projekts. Hier erfahren Sie, wie die Größe und Expertise des Kernteams den Erfolg Ihrer Einführung beeinflussen kann"
          }
        />
        <HomeCard
          title={"Dauer"}
          avatar={<AccessTimeIcon style={{ color: theme.secondary }} />}
          text={
            "Wie lange dauert die Einführung eines ERP-Systems? Entdecken Sie, welche Faktoren die Dauer des Projekts beeinflussen können und wie Sie die Implementierungszeit optimieren können."
          }
        />
        <HomeCard
          title={"Risiken"}
          avatar={<ReportProblemIcon style={{ color: theme.secondary }} />}
          text={
            "Jede ERP-Einführung birgt potenzielle Risiken. Lernen Sie die häufigsten Herausforderungen kennen und erfahren Sie, wie Sie diese proaktiv angehen können, um einen reibungslosen Ablauf sicherzustellen."
          }
        />
      </Box>
      <Typography sx={{ margin: "40px 0", color: theme.font }}>
        Basierend auf Unternehmensgröße, Branche und Region lassen sich diese
        Punkte im Voraus abschätzen. Als Grundlage hierfür dient die
        Trovarit-Studie "ERP in der Praxis" aus dem Jahr 2018/2019 in der die
        Erfahrungen von über 15.000 teilnehmenden Unternehmen festgehalten und
        ausgewertet wurde.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          sx={{
            fontWeight: "bold",
            width: "30%",
            backgroundColor: theme.primary,
            color: theme.font2,
            margin: "0 auto",
            "&:hover": {
              opacity: "0.8",
              backgroundColor: theme.primary,
            },
          }}
          onClick={() => {
            window.open("https://www.trovarit.com/erp-praxis/", "_blank");
          }}
        >
          Zur Studie
        </Button>
        <Button
          sx={{
            width: "30%",
            fontWeight: "bold",
            backgroundColor: theme.primary,
            color: theme.font2,
            margin: "0 auto",
            "&:hover": {
              opacity: "0.8",
              backgroundColor: theme.primary,
            },
          }}
          onClick={() => {
            window.location.href = routePaths.calculator;
          }}
        >
          Zur Berechnung
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
