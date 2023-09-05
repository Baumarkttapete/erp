import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

interface PieChartProps {
  data: { name: string; value: number; color: string }[];
}

const CustomPieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <Box sx={{ flex: 1 }}>
      <PieChart width={150} height={100}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={50}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default CustomPieChart;
