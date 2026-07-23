import type { ProgressPageViewModel } from "./progress.types";

import { progressMock } from "./progress.mock";

export function createProgressViewModel(): ProgressPageViewModel {
  const goalProgress = Math.round(
    (progressMock.goal.currentKilometers / progressMock.goal.targetKilometers) *
      100,
  );

  return {
    weeklySummary: {
      insight: progressMock.weeklySummary.status,
      explanation: progressMock.weeklySummary.description,
    },

    trainingLoadTrend: {
      summary: progressMock.trainingLoadTrend.summary,
      description: progressMock.trainingLoadTrend.description,
      direction: progressMock.trainingLoadTrend.direction,
      change: progressMock.trainingLoadTrend.change,
      points: progressMock.trainingLoadTrend.values,
    },

    metrics: progressMock.metrics,

    goal: {
      goalName: progressMock.goal.name,
      currentValue: `${progressMock.goal.currentKilometers} km`,
      targetValue: `${progressMock.goal.targetKilometers} km`,
      progress: Math.min(goalProgress, 100),
      description: progressMock.goal.description,
    },

    recentAchievement: {
      activityTitle: progressMock.recentAchievement.name,
      description: progressMock.recentAchievement.description,
    },
  };
}
