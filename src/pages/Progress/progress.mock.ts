import type { Metric, TrendDirection, TrendPoint } from "../../shared/types";

export const progressMetricsMock: Metric[] = [
  {
    id: "consistency",
    label: "Consistency",
    value: 92,
    valueType: "score",
    unit: "%",
    status: "excellent",
  },
  {
    id: "weekly-recovery",
    label: "Recovery",
    value: 81,
    valueType: "score",
    unit: "%",
    status: "good",
  },
];

export const progressMock = {
  period: "This week",

  weeklySummary: {
    status: "A strong and balanced week",
    description:
      "You completed the planned training volume while keeping recovery within a healthy range.",
  },

  trainingLoadTrend: {
    direction: "up" as TrendDirection,
    change: "12% this week",
    summary: "Training load is increasing gradually",
    description:
      "Your load increased without a meaningful decline in recovery.",
    values: [
      { id: "week-1", label: "W1", value: 62 },
      { id: "week-2", label: "W2", value: 68 },
      { id: "week-3", label: "W3", value: 71 },
      { id: "week-4", label: "W4", value: 79 },
      { id: "week-5", label: "W5", value: 84 },
      { id: "week-6", label: "W6", value: 89 },
      { id: "week-7", label: "Now", value: 93 },
    ] satisfies TrendPoint[],
  },

  metrics: progressMetricsMock,

  goal: {
    name: "Weekly running volume",
    currentKilometers: 82,
    targetKilometers: 100,
    description: "You need 18 km more to complete this week's volume target.",
  },

  recentAchievement: {
    name: "Longest threshold session",
    description:
      "You completed 32 minutes at threshold intensity with stable pacing.",
  },
};
