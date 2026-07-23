import type {
  ProgressMetricViewModel,
  ProgressTrendPointViewModel,
} from "./progress.types";

export const progressMetricsMock: ProgressMetricViewModel[] = [
  {
    id: "consistency",
    value: 92,
    valueType: "score",
    unit: "%",
    status: "excellent",
  },
  {
    id: "weekly-recovery",
    value: 81,
    valueType: "score",
    unit: "%",
    status: "good",
  },
];

const trainingLoadValues = [
  { id: "week-1", value: 62 },
  { id: "week-2", value: 68 },
  { id: "week-3", value: 71 },
  { id: "week-4", value: 79 },
  { id: "week-5", value: 84 },
  { id: "week-6", value: 89 },
  { id: "week-7", value: 93 },
] satisfies ProgressTrendPointViewModel[];

export const progressMock = {
  weeklySummary: {
    status: "A strong and balanced week",
    description:
      "You completed the planned training volume while keeping recovery within a healthy range.",
  },

  trainingLoadTrend: {
    direction: "up" as const,
    change: "12% this week",
    summary: "Training load is increasing gradually",
    description:
      "Your load increased without a meaningful decline in recovery.",
    values: trainingLoadValues,
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
