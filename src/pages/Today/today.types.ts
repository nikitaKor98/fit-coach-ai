import type { Metric, TrendPoint } from "../../shared/types";
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
  score: number;
  status: string;
  explanation: string;
  recommendation: string;
};

export type TodayUpcomingWorkoutViewModel = Omit<
  UpcomingWorkoutCardData,
  "title" | "subtitle" | "detailsAriaLabel"
>;

export type TodayMetricId =
  | "sleep"
  | "restingHeartRate"
  | "recovery"
  | "trainingLoad";

export type TodayMetricViewModel = Omit<Metric, "id" | "label"> & {
  id: TodayMetricId;
};

export type TodayRecoveryTrendViewModel = Omit<
  TrendCardData,
  "title" | "subtitle" | "chartAriaLabel" | "getPointTitle" | "points"
> & {
  points: TrendPoint[];
};

export type TodayRecommendationViewModel = Omit<
  ActionCardData,
  "title" | "subtitle"
>;

export type TodayRecentActivityViewModel = Omit<
  ActivityCardData,
  "title" | "subtitle"
>;

export type TodayPageViewModel = {
  header: TodayHeaderViewModel;
  dailyBrief: TodayDailyBriefViewModel;
  recommendation: TodayRecommendationViewModel;
  upcomingWorkout: TodayUpcomingWorkoutViewModel;
  metrics: TodayMetricViewModel[];
  recoveryTrend: TodayRecoveryTrendViewModel;
  recentActivity: TodayRecentActivityViewModel;
};
