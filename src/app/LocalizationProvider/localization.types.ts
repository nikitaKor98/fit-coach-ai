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
  | "navigation.profile";

export type LocalizationContextValue = {
  language: AppLanguage;
  t: (key: TranslationKey) => string;
};
