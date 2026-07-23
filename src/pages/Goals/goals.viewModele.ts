import type {
  GoalsPageViewModel,
  SupportingGoalViewModel,
} from "./goals.types";

import { goalsMock } from "./goals.mock";

function calculateProgress(current: number, target: number) {
  if (target <= 0) {
    return 0;
  }

  return Math.min(Math.round((current / target) * 100), 100);
}

export function createGoalsViewModel(): GoalsPageViewModel {
  const supportingGoals: SupportingGoalViewModel[] =
    goalsMock.supportingGoals.map((goal) => ({
      id: goal.id,
      goalName: goal.name,
      currentValue: `${goal.current} ${goal.unit}`,
      targetValue: `${goal.target} ${goal.unit}`,
      progress: calculateProgress(goal.current, goal.target),
      description: goal.description,
    }));

  return {
    primaryGoal: {
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
