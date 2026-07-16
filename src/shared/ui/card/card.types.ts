import type { TrendDirection, TrendPoint } from "../../types";
import type { BaseCardVariant } from "./BaseCard/BaseCard";

export type InsightCardData = {
  title: string;
  subtitle?: string;
  insight: string;
  explanation: string;
};

export type ActionCardData = {
  title: string;
  subtitle?: string;
  actionTitle: string;
  description: string;
};

export type ActivityCardData = {
  title: string;
  subtitle?: string;
  activityTitle: string;
  description: string;
};

export type UpcomingWorkoutCardData = {
  title: string;
  subtitle?: string;
  workoutName: string;
  duration?: string;
  distance?: string;
  intensity?: string;
  startTime?: string;
  description?: string;
  variant?: BaseCardVariant;
};

export type TrendCardData = {
  title: string;
  subtitle?: string;
  summary: string;
  description?: string;
  direction: TrendDirection;
  change?: string;
  points: TrendPoint[];
};

export type GoalProgressCardData = {
  title: string;
  subtitle?: string;
  goalName: string;
  progress: number;
  currentValue?: string;
  targetValue?: string;
  deadline?: string;
  description?: string;
  variant?: BaseCardVariant;
};
