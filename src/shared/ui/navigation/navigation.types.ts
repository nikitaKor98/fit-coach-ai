export type NavigationItemId =
  | "today"
  | "progress"
  | "ask"
  | "goals"
  | "profile";

export type NavigationItem = {
  id: NavigationItemId;
  label: string;
  isActive?: boolean;
  isPrimary?: boolean;
};
