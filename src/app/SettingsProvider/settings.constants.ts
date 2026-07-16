import type { AppSettings } from "./settings.types";

export const SETTINGS_STORAGE_KEY = "fitcoach-ai-settings";

export const DEFAULT_SETTINGS: AppSettings = {
  theme: "system",
  language: "en",
  units: "metric",
};
