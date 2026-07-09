import type { NavigationItem, NavigationItemId } from "../navigation.types";

import styles from "./BottomNavigation.module.css";

type BottomNavigationProps = {
  items: NavigationItem[];
  onSelect: (id: NavigationItemId) => void;
};

export function BottomNavigation({ items, onSelect }: BottomNavigationProps) {
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
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
