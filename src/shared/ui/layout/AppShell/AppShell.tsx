import type { ReactNode } from "react";
import styles from "./AppShell.module.css";

type AppShellProps = {
  children: ReactNode;
  navigation?: ReactNode;
};

export function AppShell({ children, navigation }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>{children}</main>
      {navigation}
    </div>
  );
}
