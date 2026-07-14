import type { Metric } from "../../shared/types";
import type {
  ActionCardData,
  ActivityCardData,
  TrendCardData,
  UpcomingWorkoutCardData,
} from "../../shared/ui/card";

export type TodayHeaderViewModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type TodayDailyBriefViewModel = {
  title: string;
  subtitle?: string;
  score: number;
  status: string;
  explanation: string;
  recommendation: string;
};

export type TodayPageViewModel = {
  header: TodayHeaderViewModel;
  dailyBrief: TodayDailyBriefViewModel;
  recommendation: ActionCardData;
  upcomingWorkout: UpcomingWorkoutCardData;
  metrics: Metric[];
  recoveryTrend: TrendCardData;
  recentActivity: ActivityCardData;
};
