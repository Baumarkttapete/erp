import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

const CustomRadarChart: React.FC<{
  data: { name: string; value: number; fullMark: number }[];
}> = ({ data }) => {
  return (
    <ResponsiveContainer width="40%" height={250}>
      <RadarChart cx="50%" cy="60%" outerRadius={"85%"} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tickCount={5}
          fontSize={"10px"}
        />
        <Radar
          name="Projekt"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default CustomRadarChart;