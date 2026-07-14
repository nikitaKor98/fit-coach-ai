import type { ReactNode } from "react";

import styles from "./BaseCard.module.css";

export type BaseCardVariant = "default" | "highlighted" | "muted";

type BaseCardPadding = "sm" | "md" | "lg";

type BaseCardProps = {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  variant?: BaseCardVariant;
  padding?: BaseCardPadding;
  className?: string;
};

export function BaseCard({
  title,
  subtitle,
  action,
  footer,
  children,
  variant = "default",
  padding = "md",
  className = "",
}: BaseCardProps) {
  const hasHeader = title || subtitle || action;

  return (
    <section
      className={[
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        className,
      ].join(" ")}
    >
      {hasHeader && (
        <header className={styles.header}>
          <div className={styles.heading}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          {action && <div className={styles.action}>{action}</div>}
        </header>
      )}

      <div className={styles.content}>{children}</div>

      {footer && <footer className={styles.footer}>{footer}</footer>}
    </section>
  );
}
