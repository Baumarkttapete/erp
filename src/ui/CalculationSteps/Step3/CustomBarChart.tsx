import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";
import { useTheme } from "../../../theme/ThemeProvider";
import { fontSize } from "../../../theme/Sizes";
import { useIntl } from "react-intl";

interface PieChartProps {
  data: { name: string; value: number }[];
}

const CustomBarChart: React.FC<PieChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <BarChart
      width={800}
      height={300}
      data={sortedData}
      layout="vertical"
      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        type="number"
        domain={[0, 50]}
        style={{
          fontSize: fontSize.text,
          color: theme.font,
          fontFamily: "inherit",
        }}
      >
        <Label
          value={intl.formatMessage({ id: "risk_inPercent" })}
          position="insideBottom"
          offset={0}
          style={{
            fontSize: fontSize.text,
            color: theme.font,
          }}
        />
      </XAxis>
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
