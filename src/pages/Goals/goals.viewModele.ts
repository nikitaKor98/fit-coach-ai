import type { GoalProgressCardData } from "../../shared/ui/card";

import { goalsMock } from "./goals.mock";

import type { GoalsPageViewModel } from "./goals.types";

function calculateProgress(current: number, target: number) {
  if (target <= 0) {
    return 0;
  }

  return Math.min(Math.round((current / target) * 100), 100);
}

export function createGoalsViewModel(): GoalsPageViewModel {
  const supportingGoals: GoalProgressCardData[] = goalsMock.supportingGoals.map(
    (goal) => ({
      title: "Supporting Goal",
      subtitle: "Current cycle",
      goalName: goal.name,
      currentValue: `${goal.current} ${goal.unit}`,
      targetValue: `${goal.target} ${goal.unit}`,
      progress: calculateProgress(goal.current, goal.target),
      description: goal.description,
    }),
  );

  return {
    header: {
      eyebrow: "Goals",
      title: "Stay focused on what matters",
      subtitle:
        "Track your primary objective and the smaller goals that support it.",
    },

    primaryGoal: {
      title: "Primary Goal",
      subtitle: "Race target",
      goalName: `${goalsMock.primaryGoal.name} · ${goalsMock.primaryGoal.targetTime}`,
      progress: goalsMock.primaryGoal.progress,
      deadline: goalsMock.primaryGoal.targetDate,
      description: goalsMock.primaryGoal.description,
      variant: "highlighted",
    },

    supportingGoals,

    recommendation: goalsMock.recommendation,
  };
}
