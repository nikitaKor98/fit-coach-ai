export type NavigationItemId =
  | "today"
  | "progress"
  | "ask"
  | "goals"
  | "profile";

export type NavigationItem = {
  id: NavigationItemId;
  isActive?: boolean;
  isPrimary?: boolean;
};
