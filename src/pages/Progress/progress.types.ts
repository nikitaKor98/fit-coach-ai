import type { Metric, TrendPoint } from "../../shared/types";
import type {
  ActivityCardData,
  GoalProgressCardData,
  InsightCardData,
  TrendCardData,
} from "../../shared/ui/card";

export type ProgressMetricId = "consistency" | "weekly-recovery";

export type ProgressTrendPointId =
  | "week-1"
  | "week-2"
  | "week-3"
  | "week-4"
  | "week-5"
  | "week-6"
  | "week-7";

export type ProgressTrendPointViewModel = Omit<TrendPoint, "id" | "label"> & {
  id: ProgressTrendPointId;
};

export type ProgressMetricViewModel = Omit<Metric, "id" | "label"> & {
  id: ProgressMetricId;
};

export type ProgressWeeklySummaryViewModel = Omit<
  InsightCardData,
  "title" | "subtitle"
>;

export type ProgressTrainingLoadTrendViewModel = Omit<
  TrendCardData,
  "title" | "subtitle" | "chartAriaLabel" | "getPointTitle" | "points"
> & {
  points: ProgressTrendPointViewModel[];
};

export type ProgressGoalViewModel = Omit<
  GoalProgressCardData,
  "title" | "subtitle" | "currentLabel" | "targetLabel"
>;

export type ProgressRecentAchievementViewModel = Omit<
  ActivityCardData,
  "title" | "subtitle"
>;

export type ProgressPageViewModel = {
  weeklySummary: ProgressWeeklySummaryViewModel;
  trainingLoadTrend: ProgressTrainingLoadTrendViewModel;
  metrics: ProgressMetricViewModel[];
  goal: ProgressGoalViewModel;
  recentAchievement: ProgressRecentAchievementViewModel;
};
