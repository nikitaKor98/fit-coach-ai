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
  progress: {
    header: {
      eyebrow: "Progress",
      title: "Your training is moving forward",
      subtitle:
        "Track the changes that matter and understand what is driving your results.",
    },

    weeklySummary: {
      title: "Weekly Summary",
      subtitle: "This week",
    },

    trainingLoad: {
      title: "Training Load",
      subtitle: "Last 7 weeks",
      chartAriaLabel: "Training load trend chart",

      points: {
        week1: "W1",
        week2: "W2",
        week3: "W3",
        week4: "W4",
        week5: "W5",
        week6: "W6",
        now: "Now",
      },
    },

    metrics: {
      consistency: "Consistency",
      recovery: "Recovery",
    },

    goal: {
      title: "Goal Progress",
      subtitle: "This week",
      currentLabel: "Current",
      targetLabel: "Target",
    },

    recentAchievement: {
      title: "Recent Achievement",
      subtitle: "This week",
    },
  },
  goals: {
    header: {
      eyebrow: "Goals",
      title: "Stay focused on what matters",
      subtitle:
        "Track your primary objective and the smaller goals that support it.",
    },

    primaryGoal: {
      title: "Primary Goal",
      subtitle: "Race target",
    },

    supportingGoals: {
      sectionTitle: "Supporting goals",
      sectionDescription:
        "Smaller milestones that move you toward the primary goal.",
      cardTitle: "Supporting Goal",
      cardSubtitle: "Current cycle",
    },

    goal: {
      currentLabel: "Current",
      targetLabel: "Target",
    },

    recommendation: {
      title: "Coach Recommendation",
      subtitle: "Next priority",
    },
  },
};
