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
      score: 87,
      status: todayMock.dailyBrief.status,
      explanation: todayMock.dailyBrief.description,
      recommendation:
        "Complete the planned threshold workout, but avoid adding extra intensity.",
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
    upcomingWorkout: {
      title: "Upcoming Workout",
      subtitle: "Today",
      workoutName: todayMock.upcomingWorkout.name,
      duration: todayMock.upcomingWorkout.duration,
      distance: todayMock.upcomingWorkout.distance,
      intensity: todayMock.upcomingWorkout.intensity,
      startTime: todayMock.upcomingWorkout.startTime,
      description: todayMock.upcomingWorkout.description,
      variant: "highlighted",
    },
    recoveryTrend: {
      title: "Recovery Trend",
      subtitle: "Last 7 days",
      summary: todayMock.recoveryTrend.summary,
      description: todayMock.recoveryTrend.description,
      direction: todayMock.recoveryTrend.direction,
      change: todayMock.recoveryTrend.change,
      points: todayMock.recoveryTrend.values,
    },
  };
}
