import type { NavigationItem } from "./navigation.types";

export const navigationMock: NavigationItem[] = [
  {
    id: "today",
    label: "Today",
    isActive: true,
  },
  {
    id: "progress",
    label: "Progress",
  },
  {
    id: "ask",
    label: "Ask",
    isPrimary: true,
  },
  {
    id: "goals",
    label: "Goals",
  },
  {
    id: "profile",
    label: "Profile",
  },
];
