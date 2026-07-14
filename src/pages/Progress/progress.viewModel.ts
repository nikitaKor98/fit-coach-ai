import type { ProgressPageViewModel } from "./progress.types";

import { progressMock } from "./progress.mock";

export function createProgressViewModel(): ProgressPageViewModel {
  const goalProgress = Math.round(
    (progressMock.goal.currentKilometers / progressMock.goal.targetKilometers) *
      100,
  );

  return {
    header: {
      eyebrow: "Progress",
      title: "Your training is moving forward",
      subtitle:
        "Track the changes that matter and understand what is driving your results.",
    },

    weeklySummary: {
      title: "Weekly Summary",
      subtitle: progressMock.period,
      insight: progressMock.weeklySummary.status,
      explanation: progressMock.weeklySummary.description,
    },

    trainingLoadTrend: {
      title: "Training Load",
      subtitle: "Last 7 weeks",
      summary: progressMock.trainingLoadTrend.summary,
      description: progressMock.trainingLoadTrend.description,
      direction: progressMock.trainingLoadTrend.direction,
      change: progressMock.trainingLoadTrend.change,
      points: progressMock.trainingLoadTrend.values,
    },

    metrics: progressMock.metrics,

    goal: {
      title: "Goal Progress",
      subtitle: "This week",
      goalName: progressMock.goal.name,
      currentValue: `${progressMock.goal.currentKilometers} km`,
      targetValue: `${progressMock.goal.targetKilometers} km`,
      progress: Math.min(goalProgress, 100),
      description: progressMock.goal.description,
    },

    recentAchievement: {
      title: "Recent Achievement",
      subtitle: "This week",
      activityTitle: progressMock.recentAchievement.name,
      description: progressMock.recentAchievement.description,
    },
  };
}
