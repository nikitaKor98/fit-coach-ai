import type { TodayPageData } from "./today.types";

export const todayMockData: TodayPageData = {
  header: {
    eyebrow: "Today",
    title: "Good morning",
    subtitle: "Your body is ready for a controlled training day.",
  },
  dailyBrief: {
    title: "Daily Brief",
    subtitle: "AI Coach",
    status: "Ready for training",
    description:
      "Recovery is slightly above your weekly average. Today is a good day to complete your planned workout, but avoid adding extra intensity.",
  },
  recommendation: {
    title: "Today's Recommendation",
    subtitle: "Training",
    name: "Threshold run",
    description: "Keep the session controlled and focus on stable pacing.",
  },
  metrics: [
    {
      id: "recovery",
      label: "Recovery",
      value: 87,
      valueType: "score",
      unit: "%",
      status: "good",
    },
    {
      id: "sleep",
      label: "Sleep",
      value: "7h 48m",
      valueType: "duration",
      status: "normal",
    },
  ],
  recentActivity: {
    title: "Recent Activity",
    subtitle: "Yesterday",
    name: "Easy run",
    description: "10.2 km · 54 min · 142 bpm",
  },
};
