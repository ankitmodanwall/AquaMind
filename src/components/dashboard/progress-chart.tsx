"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

type ProgressChartProps = {
    history: {
        session: number;
        score: number;
    }[];
};

export function ProgressChart({ history }: ProgressChartProps) {
  return (
    <div className="h-64 w-full">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <BarChart
          accessibilityLayer
          data={history}
          margin={{
            top: 5,
            right: 10,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="session"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => `Session ${value}`}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            unit="%"
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="score" fill="var(--color-score)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
