import React from 'react';
import classes from '../../css/MagicTriangleGraphic.module.css';
import { Box } from '@mui/material';

interface MagicTriangleGraphicProps {
  quality: number;
  cost: number;
  time: number;
}

const MagicTriangleGraphic: React.FC<MagicTriangleGraphicProps> = ({ quality, cost, time }) => {
    const triangleStyle = {
        clipPath: `polygon(50% 0%, 0% ${100 - quality}%, 100% ${100 - cost}%)`
      };
    
      const cornerLabels = [
        { name: "Kosten", x: 50, y: 0 },
        { name: "Qualität", x: 0, y: 100 - quality },
        { name: "Zeit", x: 100, y: 100 - cost }
      ];
    
      return (
        <Box sx={{ width: "50%", padding:"20px"}}>
          <div
            className={classes.triangleContainer}
            style={{ position: "relative", paddingTop: "86.6%" }}
          >
            <div className={classes.magicTriangle} style={triangleStyle}></div>
            {cornerLabels.map((corner, index) => (
              <div
                key={index}
                className={classes.cornerLabel}
                style={{
                  position: "absolute",
                  top: `${corner.y}%`,
                  left: `${corner.x}%`,
                  transform: "translate(-50%, -50%)",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                {corner.name}
              </div>
            ))}
          </div>
        </Box>
      );
    };
    
    export default MagicTriangleGraphic;
