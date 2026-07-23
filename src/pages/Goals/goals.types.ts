import type {
  ActionCardData,
  GoalProgressCardData,
} from "../../shared/ui/card";

export type SupportingGoalId =
  | "weekly-volume"
  | "long-run"
  | "threshold-consistency";

export type PrimaryGoalViewModel = Omit<
  GoalProgressCardData,
  "title" | "subtitle" | "currentLabel" | "targetLabel"
>;

export type SupportingGoalViewModel = Omit<
  GoalProgressCardData,
  "title" | "subtitle" | "currentLabel" | "targetLabel"
> & {
  id: SupportingGoalId;
};

export type GoalsRecommendationViewModel = Omit<
  ActionCardData,
  "title" | "subtitle"
>;

export type GoalsPageViewModel = {
  primaryGoal: PrimaryGoalViewModel;
  supportingGoals: SupportingGoalViewModel[];
  recommendation: GoalsRecommendationViewModel;
};
