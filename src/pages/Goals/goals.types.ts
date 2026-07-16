import type {
  ActionCardData,
  GoalProgressCardData,
} from "../../shared/ui/card";

export type GoalsHeaderViewModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type GoalsPageViewModel = {
  header: GoalsHeaderViewModel;
  primaryGoal: GoalProgressCardData;
  supportingGoals: GoalProgressCardData[];
  recommendation: ActionCardData;
};
