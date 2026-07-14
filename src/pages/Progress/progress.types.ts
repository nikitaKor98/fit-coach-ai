import type { Metric } from "../../shared/types";
import type {
  ActivityCardData,
  InsightCardData,
  TrendCardData,
} from "../../shared/ui/card";

export type ProgressHeaderViewModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type ProgressGoalViewModel = {
  title: string;
  subtitle?: string;
  goalName: string;
  currentValue: string;
  targetValue: string;
  progress: number;
  description?: string;
};

export type ProgressPageViewModel = {
  header: ProgressHeaderViewModel;
  weeklySummary: InsightCardData;
  trainingLoadTrend: TrendCardData;
  metrics: Metric[];
  goal: ProgressGoalViewModel;
  recentAchievement: ActivityCardData;
};
