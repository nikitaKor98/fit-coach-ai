import type {
  AppLanguage,
  AppTheme,
  MeasurementSystem,
} from "../../app/SettingsProvider/settings.types";

export type ProfileHeaderViewModel = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type ProfileSummaryViewModel = {
  name: string;
  initials: string;
  description: string;
  experienceLevel: string;
  primaryGoal: string;
};

export type ProfileDetailItem = {
  id: string;
  label: string;
  value: string;
};

export type ProfileSettingsOption = {
  value: string;
  label: string;
};

export type ProfileSettingsItem = {
  id: "units" | "language" | "theme";
  label: string;
  description?: string;
  value: string;
  options?: ProfileSettingsOption[];
  isDisabled?: boolean;
};

export type ConnectedDeviceViewModel = {
  id: string;
  name: string;
  provider: string;
  status: "connected" | "disconnected";
  lastSync?: string;
};

export type ProfilePageViewModel = {
  header: ProfileHeaderViewModel;
  summary: ProfileSummaryViewModel;
  personalDetails: ProfileDetailItem[];
  trainingPreferences: ProfileDetailItem[];
  settings: ProfileSettingsItem[];
  connectedDevices: ConnectedDeviceViewModel[];
};

export type ProfileSettingsActions = {
  onThemeChange: (theme: AppTheme) => void;
  onLanguageChange: (language: AppLanguage) => void;
  onUnitsChange: (units: MeasurementSystem) => void;
};
