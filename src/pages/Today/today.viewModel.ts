import type { TodayPageViewModel } from "./today.types";

import { todayMock } from "./today.mock";

export function createTodayViewModel(): TodayPageViewModel {
  return {
    header: {
      eyebrow: "Today",
      title: `Good morning, ${todayMock.userName}`,
      subtitle: todayMock.readinessMessage,
    },
    dailyBrief: {
      title: "Daily Brief",
      subtitle: "AI Coach",
      insight: todayMock.dailyBrief.status,
      explanation: todayMock.dailyBrief.description,
    },
    recommendation: {
      title: "Today's Recommendation",
      subtitle: "Training",
      actionTitle: todayMock.recommendation.workoutName,
      description: todayMock.recommendation.description,
    },
    metrics: todayMock.metrics,
    recentActivity: {
      title: "Recent Activity",
      subtitle: "Yesterday",
      activityTitle: todayMock.recentActivity.type,
      description: todayMock.recentActivity.description,
    },
  };
}
