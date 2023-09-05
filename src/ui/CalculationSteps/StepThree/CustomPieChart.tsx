import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

interface PieChartProps {
  data: { name: string; value: number; color: string }[];
}

const CustomPieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <Box sx={{ flex: 1 }}>
      <PieChart width={200} height={180}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
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
