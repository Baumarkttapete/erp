import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useTheme } from "../../../theme/ThemeProvider";

interface PieChartProps {
  data: { name: string; value: number }[];
}

const CustomBarChart: React.FC<PieChartProps> = ({ data }) => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      layout="vertical"
      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 50]} />
      <YAxis dataKey="name" type="category" width={300} />
      <Tooltip />
      <Bar dataKey="value" fill={theme.warning} />
    </BarChart>
  );
};

export default CustomBarChart;
