import type {
  AppLanguage,
  AppTheme,
  MeasurementSystem,
} from "../../app/SettingsProvider/settings.types";

export type ProfileSummaryViewModel = {
  name: string;
  initials: string;
  description: string;
  experienceLevel: string;
  primaryGoal: string;
};

export type PersonalDetailId = "age" | "height" | "weight" | "location";

export type PersonalDetailViewModel = {
  id: PersonalDetailId;
  value: string;
};

export type TrainingPreferenceId =
  | "primary-sport"
  | "weekly-target"
  | "long-run-day"
  | "rest-day"
  | "training-time";

export type TrainingPreferenceViewModel = {
  id: TrainingPreferenceId;
  value: string;
};

export type ProfileSettingsOption<TValue extends string> = {
  value: TValue;
};

export type UnitsSettingsItem = {
  id: "units";
  value: MeasurementSystem;
  isDisabled?: boolean;
};

export type LanguageSettingsItem = {
  id: "language";
  value: AppLanguage;
  options: ProfileSettingsOption<AppLanguage>[];
  isDisabled?: boolean;
};

export type ThemeSettingsItem = {
  id: "theme";
  value: AppTheme;
  options: ProfileSettingsOption<AppTheme>[];
  isDisabled?: boolean;
};

export type ProfileSettingsItem =
  | UnitsSettingsItem
  | LanguageSettingsItem
  | ThemeSettingsItem;

export type ConnectedDeviceStatus = "connected" | "disconnected";

export type ConnectedDeviceViewModel = {
  id: string;
  name: string;
  provider: string;
  status: ConnectedDeviceStatus;
  lastSync?: string;
};

export type ProfilePageViewModel = {
  summary: ProfileSummaryViewModel;
  personalDetails: PersonalDetailViewModel[];
  trainingPreferences: TrainingPreferenceViewModel[];
  settings: ProfileSettingsItem[];
  connectedDevices: ConnectedDeviceViewModel[];
};

export type ProfileSettingsActions = {
  onThemeChange: (theme: AppTheme) => void;
  onLanguageChange: (language: AppLanguage) => void;
  onUnitsChange: (units: MeasurementSystem) => void;
};
