import type { ReactNode } from "react";

import styles from "./AppShell.module.css";

type AppShellProps = {
  children: ReactNode;
  navigation?: ReactNode;
  aside?: ReactNode;
  header?: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
