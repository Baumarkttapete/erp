import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
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
import EuroIcon from "@mui/icons-material/Euro";
import CustomText from "../../CustomText";

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

const CostCard: React.FC<{
  softwareCost: number;
  serviceCost: number;
  hardwareCost: number;
}> = ({ softwareCost, serviceCost, hardwareCost }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: "20px", maxWidth: "500px", minWidth: "350px" }}>
      <CardHeader avatar={<EuroIcon />} title="Kosten" />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomText text={"Softwarekosten:"} />
          <CustomText text={softwareCost.toFixed(2) + " €"} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomText text={"Dienstleistungskosten:"} />
          <CustomText text={serviceCost.toFixed(2) + " €"} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomText text={"Hardwarekosten:"} />
          <CustomText text={hardwareCost.toFixed(2) + " €"} />
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomText text={"Gesamte Kosten: "} />
          <CustomText
            text={(hardwareCost + serviceCost + softwareCost).toFixed(2) + " €"}
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

export default CostCard;
