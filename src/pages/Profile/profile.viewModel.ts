import { profileMock } from "./profile.mock";

import type { AppSettings } from "../../app/SettingsProvider/settings.types";
import type { ProfilePageViewModel } from "./profile.types";

function createInitials(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export function createProfileViewModel(
  settings: AppSettings,
): ProfilePageViewModel {
  const { user, personalDetails, trainingPreferences } = profileMock;

  return {
    header: {
      eyebrow: "Profile",
      title: "Your personal context",
      subtitle:
        "Manage the information that helps FitCoach AI understand your goals, preferences, and training environment.",
    },

    summary: {
      name: `${user.firstName} ${user.lastName}`,
      initials: createInitials(user.firstName, user.lastName),
      description: user.description,
      experienceLevel: user.experienceLevel,
      primaryGoal: user.primaryGoal,
    },

    personalDetails: [
      {
        id: "age",
        label: "Age",
        value: `${personalDetails.age}`,
      },
      {
        id: "height",
        label: "Height",
        value: `${personalDetails.heightCentimeters} cm`,
      },
      {
        id: "weight",
        label: "Weight",
        value: `${personalDetails.weightKilograms} kg`,
      },
      {
        id: "location",
        label: "Location",
        value: personalDetails.location,
      },
    ],

    trainingPreferences: [
      {
        id: "primary-sport",
        label: "Primary sport",
        value: trainingPreferences.primarySport,
      },
      {
        id: "weekly-target",
        label: "Weekly target",
        value: `${trainingPreferences.weeklyTargetKilometers} km`,
      },
      {
        id: "long-run-day",
        label: "Long run day",
        value: trainingPreferences.longRunDay,
      },
      {
        id: "rest-day",
        label: "Rest day",
        value: trainingPreferences.restDay,
      },
      {
        id: "training-time",
        label: "Preferred training time",
        value: trainingPreferences.preferredTrainingTime,
      },
    ],

    settings: [
      {
        id: "units",
        label: "Units",
        description: "Distance, weight, and temperature formats.",
        value: settings.units,
      },
      {
        id: "language",
        label: "Language",
        description: "Application interface language.",
        value: settings.language,
        isDisabled: true,
      },
      {
        id: "theme",
        label: "Appearance",
        description: "Light, dark, or system theme.",
        value: settings.theme,
        options: [
          { value: "system", label: "System" },
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
        ],
      },
    ],

    connectedDevices: profileMock.connectedDevices.map((device) => ({
      id: device.id,
      name: device.name,
      provider: device.provider,
      status: device.isConnected ? "connected" : "disconnected",
      lastSync: device.lastSync,
    })),
  };
}
