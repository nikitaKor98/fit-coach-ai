export type TrendDirection = "up" | "down" | "stable";

export type TrendPoint = {
  id: string;
  label: string;
  value: number;
};

export type MetricTrend = {
  direction: TrendDirection;
  value: number;
  unit?: string;
  period: string;
  isPositive?: boolean;
};
