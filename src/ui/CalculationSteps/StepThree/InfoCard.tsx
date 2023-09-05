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
import ColorBox from "./ColorBox";
import CustomText from "../../CustomText";
import InfoCardRow from "./InfoCardRow";

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
  data: { name: string; value: number; color: string; unit: string }[];
  dataSum: { name: string; value: number; color: string; unit: string };
  infoText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  avatar,
  title,
  data,
  dataSum,
  infoText,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: "10px", maxWidth: "800px", minWidth: "600px" }}>
      <CardHeader avatar={avatar} title={title} />
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
                  unit={row.unit}
                />
              </React.Fragment>
            ))}
            <hr />
            <InfoCardRow
              color={dataSum.color}
              text={dataSum.name}
              value={dataSum.value}
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
        sx={{ width: "500px" }}
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

export default InfoCard;
