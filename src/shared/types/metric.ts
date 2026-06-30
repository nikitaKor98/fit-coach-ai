import type { MetricStatus } from "./status";
import type { MetricTrend } from "./trend";

export type MetricValueType =
  | "number"
  | "percentage"
  | "duration"
  | "distance"
  | "pace"
  | "heartRate"
  | "calories"
  | "score"
  | "status"
  | "text";

export type Metric = {
  id: string;
  label: string;
  value: number | string;
  valueType: MetricValueType;
  unit?: string;
  status?: MetricStatus;
  trend?: MetricTrend;
  updatedAt?: string;
};
