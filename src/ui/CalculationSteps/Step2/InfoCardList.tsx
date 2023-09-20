import { UserData } from "../../../models/UserData";
import EuroIcon from "@mui/icons-material/Euro";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoCardPie from "./InfoCardPie";
import { Box } from "@mui/material";
import { useTheme } from "../../../theme/ThemeProvider";
import { useIntl } from "react-intl";

const InfoCardList: React.FC<{ userData: UserData }> = ({ userData }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  const dataCostCard = {
    avatar: <EuroIcon />,
    title: intl.formatMessage({ id: "cost_per_user" }),
    data: [
      {
        name: intl.formatMessage({ id: "software" }),
        value: userData.softwareCost,
        valueFix: 2,
        color: theme.pie1,
        unit: " €",
      },
      {
        name: intl.formatMessage({ id: "service" }),
        value: userData.serviceCost,
        valueFix: 2,
        color: theme.pie2,
        unit: " €",
      },
      {
        name: intl.formatMessage({ id: "hardware" }),
        value: userData.hardwareCost,
        valueFix: 2,
        color: theme.pie3,
        unit: " €",
      },
    ],
    dataSum: {
      name: intl.formatMessage({ id: "sum" }),
      value:
        userData.hardwareCost + userData.softwareCost + userData.serviceCost,
      valueFix: 2,
      color: "transparent",
      unit: " €",
    },
    infoText: intl.formatMessage({ id: "cost_infotext" }),
  };

  const dataTimeCard = {
    avatar: <AccessTimeIcon />,
    title: intl.formatMessage({ id: "time" }),
    data: [
      {
        name: intl.formatMessage({ id: "prework" }),
        value: userData.time.prework,
        valueFix: 1,
        color: theme.pie2,
        unit: intl.formatMessage({ id: "months" }),
      },
      {
        name: intl.formatMessage({ id: "implementation" }),
        value: userData.time.implementation,
        valueFix: 1,
        color: theme.pie3,
        unit: intl.formatMessage({ id: "months" }),
      },
    ],
    dataSum: {
      name: intl.formatMessage({ id: "sum" }),
      value: userData.time.prework + userData.time.implementation,
      valueFix: 1,
      color: "transparent",
      unit: intl.formatMessage({ id: "months" }),
    },
    infoText: intl.formatMessage({ id: "time_infotext" }),
  };

  const dataPersonalCard = {
    avatar: <GroupsIcon />,
    title: intl.formatMessage({ id: "personal" }),
    data: [
      {
        name: intl.formatMessage({ id: "intern" }),
        value: userData.personal.intern,
        valueFix: 1,
        color: theme.pie1,
        unit: intl.formatMessage({ id: "employees" }),
      },
      {
        name: intl.formatMessage({ id: "extern" }),
        value: userData.personal.extern,
        valueFix: 1,
        color: theme.pie4,
        unit: intl.formatMessage({ id: "consultants" }),
      },
    ],
    dataSum: {
      name: intl.formatMessage({ id: "sum" }),
      value: userData.time.prework + userData.time.implementation,
      valueFix: 1,
      color: "transparent",
      unit: intl.formatMessage({ id: "persons" }),
    },
    infoText: intl.formatMessage({ id: "personal_infotext" }),
  };

  return (
    <Box sx={{ margin: "0 auto" }}>
      <InfoCardPie {...dataCostCard} />
      <InfoCardPie {...dataTimeCard} />
      <InfoCardPie {...dataPersonalCard} />
    </Box>
  );
};

export default InfoCardList;
