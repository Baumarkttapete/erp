import React, { useState } from "react";
import { Box, Slider, Collapse, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RiskData } from "../../../models/RiskData";
import { useTheme } from "../../../theme/ThemeProvider";
import CostumText from "../../CostumText";

const RiskOptions: React.FC<{
  riskData: RiskData[];
  onSliderChange: (
    riskName: string,
    difference: number,
    sliderValue: number
  ) => void;
}> = ({ riskData, onSliderChange }) => {
  const { theme } = useTheme();

  const [expanded, setExpanded] = useState<string | null>(null);
  const [prevSliderValues, setPrevSliderValues] = useState<number[]>(
    riskData.map((item) => item.sliderValue)
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
            width="400px"
          >
            <Button
              sx={{
                flex: 4,
                margin: "0 5px",
                padding: "0",
                display: "flex",
                justifyContent: "start",
                textTransform: "none",
                color: theme.font,
              }}
              onClick={() => handleCollapseToggle(risk.name)}
            >
              <ExpandMoreIcon
                sx={{
                  transform:
                    expanded !== risk.name ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
              <CostumText>{risk.name}</CostumText>
            </Button>

            <Slider
              sx={{
                flex: 1,
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
              defaultValue={risk.sliderValue}
              min={0}
              max={3}
              step={1}
              valueLabelDisplay="auto"
              onChange={(e, value) => {
                const difference = (value as number) - prevSliderValues[index];
                onSliderChange(risk.name, difference, value as number);
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
              width: "400px",
            }}
          >
            <CostumText>{risk.info}</CostumText>
            <CostumText>{risk.infoCost}</CostumText>
            <CostumText>{risk.infoTime}</CostumText>
            <CostumText>{risk.infoQuality}</CostumText>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default RiskOptions;
