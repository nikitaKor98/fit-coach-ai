export type AppTheme = "light" | "dark" | "system";
export type AppLanguage = "en" | "ru";
export type MeasurementSystem = "metric" | "imperial";

export type AppSettings = {
  theme: AppTheme;
  language: AppLanguage;
  units: MeasurementSystem;
};

export type SettingsContextValue = {
  settings: AppSettings;
  setTheme: (theme: AppTheme) => void;
  setLanguage: (language: AppLanguage) => void;
  setUnits: (units: MeasurementSystem) => void;
};
