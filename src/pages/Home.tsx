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
import CostumText from "../ui/CostumText";
import { useIntl } from "react-intl";

const Home: React.FC<{}> = ({}) => {
  const { theme } = useTheme();
  const intl = useIntl();

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
          {intl.formatMessage({ id: "home_title" })}
        </Typography>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold", color: theme.font2 }}
        >
          {intl.formatMessage({ id: "home_subtitle" })}
        </Typography>
        <Divider sx={{ width: "70%", margin: "20px auto" }} />
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", color: theme.font }}
        >
          {intl.formatMessage({ id: "home_subtitle2" })}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <HomeCard
          title={intl.formatMessage({ id: "cost" })}
          avatar={<EuroIcon style={{ color: theme.secondary }} />}
          text={intl.formatMessage({ id: "home_costinfo" })}
        />
        <HomeCard
          title={intl.formatMessage({ id: "personal" })}
          avatar={<GroupsIcon style={{ color: theme.secondary }} />}
          text={intl.formatMessage({ id: "home_personalinfo" })}
        />
        <HomeCard
          title={intl.formatMessage({ id: "time" })}
          avatar={<AccessTimeIcon style={{ color: theme.secondary }} />}
          text={intl.formatMessage({ id: "home_timeinfo" })}
        />
        <HomeCard
          title={intl.formatMessage({ id: "risks" })}
          avatar={<ReportProblemIcon style={{ color: theme.secondary }} />}
          text={intl.formatMessage({ id: "home_risksinfo" })}
        />
      </Box>
      <CostumText>{intl.formatMessage({ id: "home_infotext" })}</CostumText>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
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
          {intl.formatMessage({ id: "home_btn_calculation" })}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
