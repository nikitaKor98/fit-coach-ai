export type InsightPriority = "low" | "medium" | "high";

export type InsightCategory =
  | "recovery"
  | "training"
  | "sleep"
  | "nutrition"
  | "goal";

export type CoachInsight = {
  id: string;
  title: string;
  message: string;
  priority: InsightPriority;
  category: InsightCategory;
  relatedMetrics: string[];
};
