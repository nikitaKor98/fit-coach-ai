import type { Metric } from "../../shared/types";
import type {
  ActivityCardData,
  InsightCardData,
  TrendCardData,
  GoalProgressCardData,
} from "../../shared/ui/card";

export type ProgressHeaderViewModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type ProgressPageViewModel = {
  header: ProgressHeaderViewModel;
  weeklySummary: InsightCardData;
  trainingLoadTrend: TrendCardData;
  metrics: Metric[];
  goal: GoalProgressCardData;
  recentAchievement: ActivityCardData;
};
