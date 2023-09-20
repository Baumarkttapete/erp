import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButtonProps,
  styled,
  IconButton,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomPieChart from "./CustomPieChart";
import InfoCardRow from "./InfoCardRow";
import { useTheme } from "../../../theme/ThemeProvider";
import InfoIcon from "@mui/icons-material/Info";
import CostumText from "../../CostumText";
import CustomSubtitle from "../../CustomSubtitle";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface InfoCardProps {
  avatar: React.ReactNode;
  title: string;
  data: {
    valueFix: number;
    name: string;
    value: number;
    color: string;
    unit: string;
  }[];
  dataSum: {
    valueFix: number;
    name: string;
    value: number;
    color: string;
    unit: string;
  };
  infoText: string;
}

const InfoCardPie: React.FC<InfoCardProps> = ({
  avatar,
  title,
  data,
  dataSum,
  infoText,
}) => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const WIDTH = "500px";

  return (
    <Card
      sx={{
        margin: "10px",
        maxWidth: "800px",
        minWidth: WIDTH,
      }}
    >
      <CardHeader
        avatar={avatar}
        title={<CustomSubtitle>{title}</CustomSubtitle>}
        style={{ fontWeight: "bold" }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CustomPieChart data={data} />
          <Box sx={{ flex: 3 }}>
            {data.map((row, index) => (
              <React.Fragment key={index}>
                <InfoCardRow
                  color={row.color}
                  text={row.name}
                  value={row.value}
                  valueFix={row.valueFix}
                  unit={row.unit}
                />
              </React.Fragment>
            ))}
            <hr />
            <InfoCardRow
              color={dataSum.color}
              text={dataSum.name}
              value={dataSum.value}
              valueFix={dataSum.valueFix}
              unit={dataSum.unit}
            />
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        sx={{ width: WIDTH }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <hr />

          <InfoIcon
            sx={{ color: theme.secondary, margin: "10px auto", width: "100%" }}
          />
          <CostumText>{infoText}</CostumText>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default InfoCardPie;
