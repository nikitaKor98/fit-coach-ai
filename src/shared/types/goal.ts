import type { MetricValueType } from "./metric";

export type Goal = {
  id: string;
  title: string;
  targetValue: number | string;
  currentValue: number | string;
  valueType: MetricValueType;
  progress: number;
  deadline?: string;
};
