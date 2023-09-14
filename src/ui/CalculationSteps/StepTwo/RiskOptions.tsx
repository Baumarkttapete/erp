import React, { useState } from "react";
import { Box, Slider, Typography, Collapse, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RiskData } from "../../../models/RiskData";
import { useTheme } from "../../../theme/ThemeProvider";
import { ThemeProvider } from "@emotion/react";

const RiskOptions: React.FC<{
  riskData: RiskData[];
  onSliderChange: (riskName: string, value: number) => void;
}> = ({ riskData, onSliderChange }) => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  const [expanded, setExpanded] = useState<string | null>(null);
  const [prevSliderValues, setPrevSliderValues] = useState<number[]>(
    Array(riskData.length).fill(0)
  );

  const handleCollapseToggle = (riskName: string) => {
    setExpanded((prev) => (prev === riskName ? null : riskName));
  };

  return (
    <div>
      {riskData.map((risk, index) => (
        <div key={risk.name}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="10px"
            width={"500px"}
          >
            <Button
              sx={{ margin: "0 5px", padding: "0" }}
              onClick={() => handleCollapseToggle(risk.name)}
            >
              <ExpandMoreIcon
                sx={{
                  transform:
                    expanded !== risk.name ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
            </Button>
            <Typography sx={{ width: "300px", color: theme.font }}>
              {risk.name}
            </Typography>
            <Slider
              sx={{
                width: "100px",
                "& .MuiSlider-thumb": {
                  backgroundColor: theme.primary,
                },
                "& .MuiSlider-track": {
                  backgroundColor: theme.primary,
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "gray",
                },
              }}
              defaultValue={0}
              min={0}
              max={3}
              step={1}
              valueLabelDisplay="auto"
              onChange={(e, value) => {
                const difference = (value as number) - prevSliderValues[index];
                onSliderChange(risk.name, difference);
                const newPrevSliderValues = [...prevSliderValues];
                newPrevSliderValues[index] = value as number;
                setPrevSliderValues(newPrevSliderValues);
              }}
            />
          </Box>
          <Collapse
            in={expanded === risk.name}
            timeout="auto"
            unmountOnExit
            sx={{
              boxShadow: "0px 2px 1px lightGrey",
              borderRadius: "0 0 8px 8px",
              borderTop: "none",
              margin: "0 0 10px 0",
              width: "500px",
            }}
          >
            <Typography sx={{ margin: "10px", color: theme.font }}>
              {risk.info}
            </Typography>
            <Typography sx={{ margin: "10px", color: theme.font }}>
              {risk.infoCost}
            </Typography>
            <Typography sx={{ margin: "10px", color: theme.font }}>
              {risk.infoTime}
            </Typography>
            <Typography sx={{ margin: "10px", color: theme.font }}>
              {risk.infoQuality}
            </Typography>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default RiskOptions;
