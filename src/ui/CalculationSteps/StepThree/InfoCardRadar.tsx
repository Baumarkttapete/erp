import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
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
import CustomRadarChart from "./CustomRadarChart";

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

const InfoCardDiagram: React.FC<InfoCardProps> = ({
  avatar,
  title,
  data,
  infoText,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const WIDTH = "500px";

  return (
    <Card sx={{ margin: "10px", maxWidth: "800px", minWidth: WIDTH }}>
      <CardHeader avatar={avatar} title={title} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CustomRadarChart />
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
          <Typography paragraph>Infos:</Typography>
          <Typography paragraph>{infoText}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default InfoCardDiagram;
