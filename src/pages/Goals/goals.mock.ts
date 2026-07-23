import type { SupportingGoalId } from "./goals.types";

type SupportingGoalMock = {
  id: SupportingGoalId;
  name: string;
  current: number;
  target: number;
  unit: string;
  description: string;
};

export const goalsMock = {
  primaryGoal: {
    name: "Istanbul Marathon",
    targetTime: "Sub 3:00",
    targetDate: "November 1, 2026",
    progress: 68,
    description:
      "Your endurance base is developing well. The next priority is improving marathon-pace efficiency.",
  },

  supportingGoals: [
    {
      id: "weekly-volume",
      name: "Weekly running volume",
      current: 82,
      target: 100,
      unit: "km",
      description: "Increase volume gradually while keeping recovery stable.",
    },
    {
      id: "long-run",
      name: "Long run distance",
      current: 25,
      target: 32,
      unit: "km",
      description:
        "Continue extending the long run without adding unnecessary intensity.",
    },
    {
      id: "threshold-consistency",
      name: "Threshold sessions",
      current: 2,
      target: 3,
      unit: "sessions",
      description:
        "One more controlled threshold session will complete this cycle.",
    },
  ] satisfies SupportingGoalMock[],

  recommendation: {
    actionTitle: "Build marathon-pace efficiency",
    description:
      "Keep weekly volume stable and introduce controlled marathon-pace segments inside selected long runs.",
  },
};
