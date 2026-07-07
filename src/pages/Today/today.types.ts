import type { Metric } from "../../shared/types";

export type TodayPageData = {
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  dailyBrief: {
    title: string;
    subtitle: string;
    status: string;
    description: string;
  };
  recommendation: {
    title: string;
    subtitle: string;
    name: string;
    description: string;
  };
  metrics: Metric[];
  recentActivity: {
    title: string;
    subtitle: string;
    name: string;
    description: string;
  };
};
