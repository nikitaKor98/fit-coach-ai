import type { Metric } from "../../shared/types";
import type {
  ActionCardData,
  ActivityCardData,
  InsightCardData,
  TrendCardData,
  UpcomingWorkoutCardData,
} from "../../shared/ui/card";

export type TodayHeaderViewModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type TodayPageViewModel = {
  header: TodayHeaderViewModel;
  dailyBrief: InsightCardData;
  recommendation: ActionCardData;
  upcomingWorkout: UpcomingWorkoutCardData;
  metrics: Metric[];
  recoveryTrend: TrendCardData;
  recentActivity: ActivityCardData;
};
