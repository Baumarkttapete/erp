import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import MagicTriangleGraphic from "./StepTwo/MagicTriangleGraphic";
import TriangleSlider from "./StepTwo/TriangleSlider";
import { TriangleData } from "../../models/TriangleData";

const StepTwo: React.FC<{
  triangleData: TriangleData;
  onChange: (triangleData: TriangleData) => void;
}> = ({ triangleData, onChange }) => {
  const [time, setTime] = useState(triangleData.time);
  const [cost, setCost] = useState(triangleData.cost);
  const [quality, setQuality] = useState(triangleData.quality);

  useEffect(() => {
    onChange(new TriangleData(time, quality, cost));
  }, [time, cost, quality]);

  const handleTimeChange = (newValue: number) => {
    if (!timeLock) {
      const timeDiff = newValue - time;
      setTime(newValue);

      if (!qualityLock && costLock) {
        setQuality(quality + timeDiff);
      } else if (!qualityLock) {
        setQuality(quality + timeDiff * 0.5);
      }
      if (!costLock && qualityLock) {
        setCost(cost - timeDiff);
      } else if (!costLock) {
        setCost(cost - timeDiff * 0.5);
      }
    }
  };

  const handleCostChange = (newValue: number) => {
    if (!costLock) {
      const costDiff = newValue - cost;
      setCost(newValue);

      if (!qualityLock && timeLock) {
        setQuality(quality + costDiff);
      } else if (!qualityLock) {
        setQuality(quality + costDiff * 0.5);
      }
      if (!timeLock && qualityLock) {
        setTime(time - costDiff);
      } else if (!timeLock) {
        setTime(time - costDiff * 0.5);
      }
    }
  };

  const handleQualityChange = (newValue: number) => {
    if (!qualityLock) {
      const qualityDiff = newValue - quality;
      setQuality(newValue);

      if (!costLock && timeLock) {
        setCost(cost + qualityDiff);
      } else if (!costLock) {
        setCost(cost + qualityDiff * 0.5);
      }

      if (!timeLock && costLock) {
        setTime(time + qualityDiff);
      } else if (!timeLock) {
        setTime(time + qualityDiff * 0.5);
      }
    }
  };

  const toggleTimeLock = () => {
    setTimeLock(!timeLock);
    if (!timeLock) {
      setCostLock(false);
      setQualityLock(false);
    }
  };

  const toggleCostLock = () => {
    setCostLock(!costLock);
    if (!costLock) {
      setTimeLock(false);
      setQualityLock(false);
    }
  };

  const toggleQualityLock = () => {
    setQualityLock(!qualityLock);
    if (!qualityLock) {
      setTimeLock(false);
      setCostLock(false);
    }
  };

  const resetValues = () => {
    setTime(50);
    setCost(50);
    setQuality(50);
    setTimeLock(false);
    setCostLock(false);
    setQualityLock(false);
  };

  const [timeLock, setTimeLock] = useState(false);
  const [costLock, setCostLock] = useState(false);
  const [qualityLock, setQualityLock] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", margin: "50px" }}>
      <Box sx={{ width: "50%" }}>
        <TriangleSlider
          label="Zeit"
          value={time}
          onChange={handleTimeChange}
          locked={timeLock}
          onLockToggle={toggleTimeLock}
        />
        <TriangleSlider
          label="Kosten"
          value={cost}
          onChange={handleCostChange}
          locked={costLock}
          onLockToggle={toggleCostLock}
        />
        <TriangleSlider
          label="Qualität"
          value={quality}
          onChange={handleQualityChange}
          locked={qualityLock}
          onLockToggle={toggleQualityLock}
        />
        <Button
          sx={{ margin: "15px" }}
          variant="outlined"
          onClick={resetValues}
        >
          Reset
        </Button>
      </Box>
      <MagicTriangleGraphic quality={quality} cost={cost} time={time} />
    </Box>
  );
};

export default StepTwo;
