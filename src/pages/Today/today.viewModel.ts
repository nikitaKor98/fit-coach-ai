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
      score: 87,
      status: todayMock.dailyBrief.status,
      explanation: todayMock.dailyBrief.description,
      recommendation:
        "Complete the planned threshold workout, but avoid adding extra intensity.",
    },
    recommendation: {
      actionTitle: todayMock.recommendation.workoutName,
      description: todayMock.recommendation.description,
    },
    metrics: todayMock.metrics,
    recentActivity: {
      activityTitle: todayMock.recentActivity.type,
      description: todayMock.recentActivity.description,
    },
    upcomingWorkout: {
      workoutName: todayMock.upcomingWorkout.name,
      duration: todayMock.upcomingWorkout.duration,
      distance: todayMock.upcomingWorkout.distance,
      intensity: todayMock.upcomingWorkout.intensity,
      startTime: todayMock.upcomingWorkout.startTime,
      description: todayMock.upcomingWorkout.description,
      variant: "highlighted",
    },
    recoveryTrend: {
      summary: todayMock.recoveryTrend.summary,
      description: todayMock.recoveryTrend.description,
      direction: todayMock.recoveryTrend.direction,
      change: todayMock.recoveryTrend.change,
      points: todayMock.recoveryTrend.values,
    },
  };
}
