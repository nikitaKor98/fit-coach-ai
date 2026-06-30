export type TrendDirection = "up" | "down" | "stable";

export type MetricTrend = {
  direction: TrendDirection;
  value: number;
  unit?: string;
  period: string;
  isPositive?: boolean;
};
