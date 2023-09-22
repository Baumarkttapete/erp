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

  const costSum =
    userData.hardwareCost + userData.softwareCost + userData.serviceCost;
  const timeSum = userData.time.prework + userData.time.implementation;
  const personalSum = userData.personal.intern + userData.personal.extern;

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
        percent: ((userData.softwareCost / costSum) * 100).toFixed(0) + "%",
      },
      {
        name: intl.formatMessage({ id: "service" }),
        value: userData.serviceCost,
        valueFix: 2,
        color: theme.pie2,
        unit: " €",
        percent: ((userData.serviceCost / costSum) * 100).toFixed(0) + "%",
      },
      {
        name: intl.formatMessage({ id: "hardware" }),
        value: userData.hardwareCost,
        valueFix: 2,
        color: theme.pie3,
        unit: " €",
        percent: ((userData.hardwareCost / costSum) * 100).toFixed(0) + "%",
      },
    ],
    dataSum: {
      name: intl.formatMessage({ id: "sum" }),
      value: costSum,
      valueFix: 2,
      color: "transparent",
      unit: " €",
      percent: "100%",
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
        percent: ((userData.time.prework / timeSum) * 100).toFixed(0) + "%",
      },
      {
        name: intl.formatMessage({ id: "implementation" }),
        value: userData.time.implementation,
        valueFix: 1,
        color: theme.pie3,
        unit: intl.formatMessage({ id: "months" }),
        percent:
          ((userData.time.implementation / timeSum) * 100).toFixed(0) + "%",
      },
    ],
    dataSum: {
      name: intl.formatMessage({ id: "sum" }),
      value: timeSum,
      valueFix: 1,
      color: "transparent",
      unit: intl.formatMessage({ id: "months" }),
      percent: "100%",
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
        percent:
          ((userData.personal.intern / personalSum) * 100).toFixed(0) + "%",
      },
      {
        name: intl.formatMessage({ id: "extern" }),
        value: userData.personal.extern,
        valueFix: 1,
        color: theme.pie4,
        unit: intl.formatMessage({ id: "consultants" }),
        percent:
          ((userData.personal.extern / personalSum) * 100).toFixed(0) + "%",
      },
    ],
    dataSum: {
      name: intl.formatMessage({ id: "sum" }),
      value: personalSum,
      valueFix: 1,
      color: "transparent",
      unit: intl.formatMessage({ id: "persons" }),
      percent: "100%",
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
