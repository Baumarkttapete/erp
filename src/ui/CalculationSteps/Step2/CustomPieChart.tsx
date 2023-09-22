import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

interface PieChartProps {
  data: { name: string; value: number; color: string }[];
}

const CustomPieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <Box sx={{ flex: 1 }}>
      <PieChart width={250} height={170}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={80}
          fill="#121212"
          dataKey="value"
          paddingAngle={3}
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
