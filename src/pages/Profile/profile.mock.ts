export const profileMock = {
  user: {
    firstName: "Nikita",
    lastName: "Korytnikov",
    experienceLevel: "Advanced",
    primaryGoal: "Istanbul Marathon · Sub 3:00",
    description:
      "Building endurance, marathon-pace efficiency, and consistent recovery.",
  },

  personalDetails: {
    age: 28,
    heightCentimeters: 177,
    weightKilograms: 74,
    location: "Belgrade, Serbia",
  },

  trainingPreferences: {
    primarySport: "Running",
    weeklyTargetKilometers: 100,
    longRunDay: "Monday",
    restDay: "Sunday",
    preferredTrainingTime: "Evening",
  },

  settings: {
    units: "Metric",
    language: "English",
    theme: "System",
  },

  connectedDevices: [
    {
      id: "garmin-watch",
      name: "Forerunner",
      provider: "Garmin",
      isConnected: true,
      lastSync: "Today, 08:12",
    },
    {
      id: "apple-health",
      name: "Apple Health",
      provider: "Apple",
      isConnected: false,
    },
  ],
};
