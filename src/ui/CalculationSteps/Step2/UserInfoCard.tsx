import React from "react";
import { Box, Card, Tooltip } from "@mui/material";
import { UserData } from "../../../models/UserData";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "../../../theme/ThemeProvider";
import { useIntl } from "react-intl";
import CostumSubtitle from "../../CustomSubtitle";

const UserInfoCard: React.FC<{
  userData: UserData;
  showProjectData?: boolean;
}> = ({ userData, showProjectData }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  const getBranch = () => {
    if (userData.branch === "industrie")
      return intl.formatMessage({ id: "branch_industry" });
    else if (userData.branch === "handel")
      return intl.formatMessage({ id: "branch_trading" });
    else if (userData.branch === "dienstleistung")
      return intl.formatMessage({ id: "branch_service" });
  };

  const getRegion = () => {
    if (userData.region === "D") return intl.formatMessage({ id: "region_d" });
    else if (userData.region === "A")
      return intl.formatMessage({ id: "region_a" });
    else if (userData.region === "CH")
      return intl.formatMessage({ id: "region_ch" });
  };

  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateColumns: "33% 33% 33%",
        gridGap: "10px",
        padding: "10px",
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
        <Tooltip title={intl.formatMessage({ id: "tooltip_employees" })}>
          <GroupIcon sx={{ margin: "auto 0" }} />
        </Tooltip>
        <CostumSubtitle>
          {userData.userQuantity} {intl.formatMessage({ id: "employees" })}
        </CostumSubtitle>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: "0 20px",
        }}
      >
        <Tooltip title={intl.formatMessage({ id: "tooltip_branch" })}>
          <BusinessIcon sx={{ margin: "auto 0" }} />
        </Tooltip>
        <CostumSubtitle>{getBranch()}</CostumSubtitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "0 20px",
        }}
      >
        <Tooltip title={intl.formatMessage({ id: "tooltip_region" })}>
          <LocationOnIcon sx={{ margin: "auto 0" }} />
        </Tooltip>
        <CostumSubtitle>{getRegion()}</CostumSubtitle>
      </Box>
      {showProjectData && (
        <>
          <Box
            sx={{
              display: "flex",
              margin: "0 20px",
            }}
          >
            <Tooltip title={intl.formatMessage({ id: "cost_per_user" })}>
              <EuroIcon sx={{ margin: "auto 0" }} />
            </Tooltip>
            <CostumSubtitle>
              {(
                userData.softwareCost +
                userData.serviceCost +
                userData.hardwareCost
              ).toFixed(2)}
              {" EUR"}
            </CostumSubtitle>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "0 20px",
            }}
          >
            <Tooltip title={intl.formatMessage({ id: "tooltip_time" })}>
              <AccessTimeIcon sx={{ margin: "auto 0" }} />
            </Tooltip>
            <CostumSubtitle>
              {(userData.time.implementation + userData.time.prework).toFixed(
                1
              )}
              {intl.formatMessage({ id: "months" })}
            </CostumSubtitle>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "0 20px",
            }}
          >
            <Tooltip title={intl.formatMessage({ id: "tooltip_personal" })}>
              <GroupsIcon sx={{ margin: "auto 0" }} />
            </Tooltip>
            <CostumSubtitle>
              {(userData.personal.intern + userData.personal.extern).toFixed(1)}
              {intl.formatMessage({ id: "persons" })}
            </CostumSubtitle>
          </Box>
        </>
      )}
    </Card>
  );
};

export default UserInfoCard;
