import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

const CustomRadarChart: React.FC = () => {
  const data = [
    {
      subject: "Qualität",
      A: 50,
      fullMark: 100,
    },
    {
      subject: "Kosten",
      A: 50,
      fullMark: 100,
    },
    {
      subject: "Dauer",
      A: 50,
      fullMark: 100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart cx="50%" cy="50%" outerRadius={"85%"} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tickCount={5}
          fontSize={"10px"}
        />
        <Radar
          name="Projekt"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default CustomRadarChart;
