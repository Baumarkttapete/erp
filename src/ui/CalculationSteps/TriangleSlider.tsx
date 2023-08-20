import React from "react";
import { Box, Typography, Button, Input, Slider } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

interface TriangleSliderProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  locked: boolean;
  onLockToggle: () => void;
}

const TriangleSlider: React.FC<TriangleSliderProps> = ({
  label,
  value,
  onChange,
  locked,
  onLockToggle,
}) => {
  const MIN_VALUE = 0;
  const MAX_VALUE = 100;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (!locked) {
      onChange(newValue as number);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!locked) {
      onChange(event.target.value === "" ? 0 : Number(event.target.value));
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "20px",
        }}
      >
        <Typography sx={{ flex: 2, fontSize: "16px", margin: "auto 0 auto 0" }}>
          {label}
        </Typography>
        <Slider
          min={MIN_VALUE}
          max={MAX_VALUE}
          sx={{ flex: 6, margin: "0 15px 0 15px" }}
          value={value}
          disabled={locked}
          onChange={handleSliderChange}
          step={1}
        />
        <Input
          value={value}
          sx={{ flex: 1.5 }}
          onChange={handleInputChange}
          size="small"
          disabled={locked}
          inputProps={{
            step: 1,
            min: { MIN_VALUE },
            max: { MAX_VALUE },
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <Button
          onClick={onLockToggle}
          sx={{ flex: 1, display: "flex", justifyContent: "conter" }}
        >
          {locked ? <LockIcon /> : <LockOpenIcon />}
        </Button>
      </Box>
    </>
  );
};

export default TriangleSlider;
