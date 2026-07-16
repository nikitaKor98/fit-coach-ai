import { useLocalization } from "../../../../app/LocalizationProvider/useLocalization";

import type { NavigationItem, NavigationItemId } from "../navigation.types";

import styles from "./BottomNavigation.module.css";

type BottomNavigationProps = {
  items: NavigationItem[];
  onSelect: (id: NavigationItemId) => void;
};

const navigationTranslationKeys = {
  today: "navigation.today",
  progress: "navigation.progress",
  ask: "navigation.ask",
  goals: "navigation.goals",
  profile: "navigation.profile",
} as const;

export function BottomNavigation({ items, onSelect }: BottomNavigationProps) {
  const { t } = useLocalization();
  return (
    <nav className={styles.navigation} aria-lable="Primary navigation">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className={[
            styles.item,
            item.isActive ? styles.active : "",
            item.isPrimary ? styles.primary : "",
          ].join(" ")}
        >
          <span className={styles.label}>
            {t(navigationTranslationKeys[item.id])}
          </span>
        </button>
      ))}
    </nav>
  );
}
