import type { AppLanguage } from "../SettingsProvider/settings.types";

export type TranslationValue =
  | string
  | {
      [key: string]: TranslationValue;
    };

export type TranslationDictionary = {
  [key: string]: TranslationValue;
};

export type TranslationKey =
  | "navigation.today"
  | "navigation.progress"
  | "navigation.ask"
  | "navigation.goals"
  | "navigation.profile"
  | "today.header.eyebrow"
  | "today.header.title"
  | "today.header.subtitle"
  | "today.condition.title"
  | "today.condition.description"
  | "today.dailyBrief.title"
  | "today.dailyBrief.subtitle"
  | "today.dailyBrief.recommendationLabel"
  | "today.upcomingWorkout.title"
  | "today.upcomingWorkout.subtitle"
  | "today.upcomingWorkout.detailsAriaLabel"
  | "today.metrics.sleep"
  | "today.metrics.restingHeartRate"
  | "today.metrics.recovery"
  | "today.metrics.trainingLoad"
  | "today.recoveryTrend.title"
  | "today.recoveryTrend.subtitle"
  | "today.recoveryTrend.chartAriaLabel"
  | "today.recommendation.title"
  | "today.recommendation.subtitle"
  | "today.recentActivity.title"
  | "today.recentActivity.subtitle"
  | "progress.header.eyebrow"
  | "progress.header.title"
  | "progress.header.subtitle"
  | "progress.weeklySummary.title"
  | "progress.weeklySummary.subtitle"
  | "progress.trainingLoad.title"
  | "progress.trainingLoad.subtitle"
  | "progress.trainingLoad.chartAriaLabel"
  | "progress.metrics.consistency"
  | "progress.metrics.recovery"
  | "progress.goal.title"
  | "progress.goal.subtitle"
  | "progress.goal.currentLabel"
  | "progress.goal.targetLabel"
  | "progress.recentAchievement.title"
  | "progress.recentAchievement.subtitle"
  | "progress.trainingLoad.points.week1"
  | "progress.trainingLoad.points.week2"
  | "progress.trainingLoad.points.week3"
  | "progress.trainingLoad.points.week4"
  | "progress.trainingLoad.points.week5"
  | "progress.trainingLoad.points.week6"
  | "progress.trainingLoad.points.now";

export type LocalizationContextValue = {
  language: AppLanguage;
  t: (key: TranslationKey) => string;
};
