import type { AppSettings } from "../../app/SettingsProvider/settings.types";

import { profileMock } from "./profile.mock";

import type {
  PersonalDetailViewModel,
  ProfilePageViewModel,
  ProfileSettingsItem,
  TrainingPreferenceViewModel,
} from "./profile.types";

function createInitials(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export function createProfileViewModel(
  settings: AppSettings,
): ProfilePageViewModel {
  const { user, personalDetails, trainingPreferences } = profileMock;

  const personalDetailItems: PersonalDetailViewModel[] = [
    {
      id: "age",
      value: `${personalDetails.age}`,
    },
    {
      id: "height",
      value: `${personalDetails.heightCentimeters} cm`,
    },
    {
      id: "weight",
      value: `${personalDetails.weightKilograms} kg`,
    },
    {
      id: "location",
      value: personalDetails.location,
    },
  ];

  const trainingPreferenceItems: TrainingPreferenceViewModel[] = [
    {
      id: "primary-sport",
      value: trainingPreferences.primarySport,
    },
    {
      id: "weekly-target",
      value: `${trainingPreferences.weeklyTargetKilometers} km`,
    },
    {
      id: "long-run-day",
      value: trainingPreferences.longRunDay,
    },
    {
      id: "rest-day",
      value: trainingPreferences.restDay,
    },
    {
      id: "training-time",
      value: trainingPreferences.preferredTrainingTime,
    },
  ];

  const settingsItems: ProfileSettingsItem[] = [
    {
      id: "units",
      value: settings.units,
      isDisabled: true,
    },
    {
      id: "language",
      value: settings.language,
      options: [{ value: "en" }, { value: "ru" }],
    },
    {
      id: "theme",
      value: settings.theme,
      options: [{ value: "system" }, { value: "light" }, { value: "dark" }],
    },
  ];

  return {
    summary: {
      name: `${user.firstName} ${user.lastName}`,
      initials: createInitials(user.firstName, user.lastName),
      description: user.description,
      experienceLevel: user.experienceLevel,
      primaryGoal: user.primaryGoal,
    },

    personalDetails: personalDetailItems,

    trainingPreferences: trainingPreferenceItems,

    settings: settingsItems,

    connectedDevices: profileMock.connectedDevices.map((device) => ({
      id: device.id,
      name: device.name,
      provider: device.provider,
      status: device.isConnected ? "connected" : "disconnected",
      lastSync: device.lastSync,
    })),
  };
}
