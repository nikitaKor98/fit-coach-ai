import type { TranslationDictionary } from "../localization.types";

export const en: TranslationDictionary = {
  navigation: {
    today: "Today",
    progress: "Progress",
    ask: "Ask",
    goals: "Goals",
    profile: "Profile",
  },

  today: {
    header: {
      eyebrow: "Today",
      title: "Your daily training plan",
      subtitle:
        "Stay consistent and focus on the actions that matter most today.",
    },
    condition: {
      title: "Your condition",
      description: "Key signals supporting today's recommendation.",
    },

    dailyBrief: {
      title: "Daily brief",
      subtitle: "Today's readiness overview",
      recommendationLabel: "Today",
    },

    upcomingWorkout: {
      title: "Upcoming workout",
      subtitle: "Your next planned session",
      detailsAriaLabel: "Workout details",
    },

    metrics: {
      sleep: "Sleep",
      restingHeartRate: "Resting heart rate",
      recovery: "Recovery",
      trainingLoad: "Training load",
    },

    recoveryTrend: {
      title: "Recovery trend",
      subtitle: "Last 7 days",
      chartAriaLabel: "Recovery trend chart",
    },

    recommendation: {
      title: "Today's Recommendation",
      subtitle: "Training",
    },

    recentActivity: {
      title: "Recent Activity",
      subtitle: "Yesterday",
    },

    sections: {
      upcomingWorkout: "Upcoming workout",
      metrics: "Today's metrics",
      weeklyProgress: "Weekly progress",
      recommendation: "Coach recommendation",
      recentActivity: "Recent activity",
    },

    labels: {
      duration: "Duration",
      distance: "Distance",
      pace: "Pace",
      heartRate: "Heart rate",
    },

    actions: {
      startWorkout: "Start workout",
      viewDetails: "View details",
      viewProgress: "View progress",
      openActivity: "Open activity",
    },
  },
};
