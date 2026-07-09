import type { ReactNode } from "react";

import { BaseCard } from "../BaseCard/BaseCard";

// import styles from "./ActionCard.module.css";
import contentStyles from "../cardContent.module.css";

type ActionCardProps = {
  title: string;
  subtitle?: string;
  actionTitle: string;
  description: string;
  footer?: ReactNode;
  variant?: "default" | "highlighted" | "muted";
};

export function ActionCard({
  title,
  subtitle,
  actionTitle,
  description,
  footer,
  variant = "default",
}: ActionCardProps) {
  return (
    <BaseCard
      title={title}
      subtitle={subtitle}
      footer={footer}
      variant={variant}
    >
      <div className={contentStyles.content}>
        <p className={contentStyles.title}>{actionTitle}</p>
        <p className={contentStyles.description}>{description}</p>
      </div>
    </BaseCard>
  );
}
