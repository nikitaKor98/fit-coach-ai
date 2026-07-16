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

export type ProfileSettingsItem = {
  id: string;
  label: string;
  description?: string;
  value: string;
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
