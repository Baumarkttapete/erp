import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useTheme } from "../../../theme/ThemeProvider";
import { fontSize } from "../../../theme/Sizes";

interface PieChartProps {
  data: { name: string; value: number }[];
}

const CustomBarChart: React.FC<PieChartProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <BarChart
      width={800}
      height={300}
      data={data}
      layout="vertical"
      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 50]} />
      <YAxis
        dataKey="name"
        type="category"
        width={400}
        style={{
          fontSize: fontSize.text,
          color: theme.font,
          fontFamily: "inherit",
        }}
      />
      <Tooltip />
      <Bar dataKey="value" fill={theme.warning} />
    </BarChart>
  );
};

export default CustomBarChart;
