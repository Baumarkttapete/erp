import React from "react";
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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CustomText from "../../CustomText";
import { Time } from "../../../data/Time";

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

const TimeCard: React.FC<{
  time: Time;
}> = ({ time }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: "20px", maxWidth: "500px", minWidth: "350px" }}>
      <CardHeader avatar={<AccessTimeIcon />} title="Dauer" />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomText text={"Vorarbeit:"} />
          <CustomText text={time.prework.toFixed(1) + " Monate"} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomText text={"Implementierung:"} />
          <CustomText text={time.implementation.toFixed(1) + " Monate"} />
        </Box>

        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomText text={"Gesamte Dauer: "} />
          <CustomText
            text={(time.prework + time.implementation).toFixed(1) + " Monate"}
          />
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
        sx={{ width: "350px" }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Typography paragraph>Infos:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default TimeCard;
