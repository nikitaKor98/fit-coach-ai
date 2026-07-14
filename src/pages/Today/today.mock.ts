import type { Metric } from "../../shared/types";

export const todayMetricsMock: Metric[] = [
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
];

export const todayMock = {
  userName: "Nikita",
  readinessMessage: "Your body is ready for a controlled training day.",
  dailyBrief: {
    status: "Ready for training",
    description:
      "Recovery is slightly above your weekly average. Today is a good day to complete your planned workout, but avoid adding extra intensity.",
  },
  recommendation: {
    workoutName: "Threshold run",
    description: "Keep the session controlled and focus on stable pacing.",
  },
  metrics: todayMetricsMock,
  recentActivity: {
    type: "Easy run",
    description: "10.2 km · 54 min · 142 bpm",
  },
  upcomingWorkout: {
    name: "Threshold run",
    duration: "55 min",
    distance: "10 km",
    intensity: "Moderate",
    startTime: "18:30",
    description:
      "Complete the session at a controlled effort and keep the final interval smooth.",
  },
  recoveryTrend: {
    values: [
      { id: "mon", label: "Mon", value: 72 },
      { id: "tue", label: "Tue", value: 76 },
      { id: "wed", label: "Wed", value: 74 },
      { id: "thu", label: "Thu", value: 79 },
      { id: "fri", label: "Fri", value: 82 },
      { id: "sat", label: "Sat", value: 84 },
      { id: "sun", label: "Sun", value: 87 },
    ],
    direction: "up" as const,
    change: "8% this week",
    summary: "Recovery is improving",
    description:
      "Your recovery has gradually increased during the last seven days.",
  },
};
