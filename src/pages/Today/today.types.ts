import type { Metric } from "../../shared/types";

export type TodayHeaderViewModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type TodayBriefViewModel = {
  title: string;
  subtitle: string;
  insight: string;
  explanation: string;
};

export type TodayRecommendationViewModel = {
  title: string;
  subtitle: string;
  actionTitle: string;
  description: string;
};

export type TodayActivityViewModel = {
  title: string;
  subtitle: string;
  activityTitle: string;
  description: string;
};

export type TodayPageViewModel = {
  header: TodayHeaderViewModel;
  dailyBrief: TodayBriefViewModel;
  recommendation: TodayRecommendationViewModel;
  metrics: Metric[];
  recentActivity: TodayActivityViewModel;
};
