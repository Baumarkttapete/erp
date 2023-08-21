import React from "react";
import classes from "../../../css/MagicTriangleGraphic.module.css";
import { Card } from "@mui/material";

interface MagicTriangleGraphicProps {
  quality: number;
  cost: number;
  time: number;
}

const MagicTriangleGraphic: React.FC<MagicTriangleGraphicProps> = ({
  quality,
  cost,
  time,
}) => {
  const size = 100;

  const maxDistance = size; // Maximale Länge der Striche (halbe Größe)

  const costX = size;
  const costY = size - ((cost / 2) * maxDistance) / 100;

  const qualityX = size - ((quality / 2) * maxDistance) / 100;
  const qualityY = size + ((quality / 2) * maxDistance) / 100;

  const timeX = size + ((time / 2) * maxDistance) / 100;
  const timeY = size + ((time / 2) * maxDistance) / 100;

  const polygonPoints = `${costX},${costY} ${qualityX},${qualityY} ${timeX},${timeY}`;

  return (
    <Card sx={{ width: "40%" }}>
      <div className={classes.triangleContainer}>
        <svg
          viewBox={`0 0 ${size * 2} ${size * 2}`}
          className={classes.magicTriangle}
        >
          <polygon points={polygonPoints} fill="lightblue" />
          <line
            x1={size}
            y1={size}
            x2={costX}
            y2={costY}
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1={size}
            y1={size}
            x2={qualityX}
            y2={qualityY}
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1={size}
            y1={size}
            x2={timeX}
            y2={timeY}
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1={costX}
            y1={costY}
            x2={qualityX}
            y2={qualityY}
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1={costX}
            y1={costY}
            x2={timeX}
            y2={timeY}
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1={qualityX}
            y1={qualityY}
            x2={timeX}
            y2={timeY}
            stroke="black"
            strokeWidth="1"
          />
          <text x={costX} y={costY} textAnchor="middle" dy="-5">
            Kosten
          </text>
          <text x={qualityX - 5} y={qualityY + 5} textAnchor="end">
            Qualität
          </text>
          <text x={timeX + 5} y={timeY + 5} textAnchor="start">
            Zeit
          </text>
        </svg>
      </div>
    </Card>
  );
};

export default MagicTriangleGraphic;
