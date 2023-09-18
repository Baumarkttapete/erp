import React from "react";
import { Box, Card, Tooltip, Typography } from "@mui/material";
import { UserData } from "../../../models/UserData";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "../../../theme/ThemeProvider";

const UserInfoCard: React.FC<{
  userData: UserData;
  showProjectData?: boolean;
}> = ({ userData, showProjectData }) => {
  const { theme } = useTheme();

  const getBranch = () => {
    if (userData.branch === "industrie") return "Industrie";
    else if (userData.branch === "handel") return "Handel";
    else if (userData.branch === "dienstleistung") return "Dienstleistung";
  };

  const getRegion = () => {
    if (userData.region === "D") return "Deutschland";
    else if (userData.region === "A") return "Österreich";
    else if (userData.region === "CH") return "Schweiz";
  };

  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        gridGap: "10px",
        padding: "20px",
        margin: "10px auto",
        backgroundColor: theme.accent,
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "0 20px",
        }}
      >
        <Tooltip title="Anzahl Mitarbeiter im Unternehmen">
          <GroupIcon sx={{ margin: "auto 0" }} />
        </Tooltip>
        <Typography sx={{ margin: "5px 5px", color: theme.font }}>
          {userData.userQuantity} Mitarbeiter
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: "0 20px",
        }}
      >
        <Tooltip title="Branche des Unternehmens">
          <BusinessIcon sx={{ margin: "auto 0" }} />
        </Tooltip>
        <Typography sx={{ margin: "5px 5px", color: theme.font }}>
          {getBranch()}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "0 20px",
        }}
      >
        <Tooltip title="Region des Unternehmens">
          <LocationOnIcon sx={{ margin: "auto 0" }} />
        </Tooltip>
        <Typography sx={{ margin: "5px 5px", color: theme.font }}>
          {getRegion()}
        </Typography>
      </Box>
      {showProjectData && (
        <>
          <Box
            sx={{
              display: "flex",
              margin: "0 20px",
            }}
          >
            {" "}
            <Tooltip title="Kosten pro User">
              <EuroIcon sx={{ margin: "auto 0" }} />
            </Tooltip>
            <Typography sx={{ margin: "5px 5px", color: theme.font }}>
              {(
                userData.softwareCost +
                userData.serviceCost +
                userData.hardwareCost
              ).toFixed(2)}{" "}
              EUR
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "0 20px",
            }}
          >
            <Tooltip title="Dauer des Projekts">
              <AccessTimeIcon sx={{ margin: "auto 0" }} />
            </Tooltip>
            <Typography sx={{ margin: "5px 5px", color: theme.font }}>
              {(userData.time.implementation + userData.time.prework).toFixed(
                1
              )}{" "}
              Monate
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "0 20px",
            }}
          >
            <Tooltip title="Benötigte Personen im Kernteam">
              <GroupsIcon sx={{ margin: "auto 0" }} />
            </Tooltip>
            <Typography sx={{ margin: "5px 5px", color: theme.font }}>
              {(userData.personal.intern + userData.personal.extern).toFixed(1)}{" "}
              Personen
            </Typography>
          </Box>
        </>
      )}
    </Card>
  );
};

export default UserInfoCard;
