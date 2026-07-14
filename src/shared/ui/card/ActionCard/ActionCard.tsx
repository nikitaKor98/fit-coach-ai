import type { ReactNode } from "react";

import { BaseCard, type BaseCardVariant } from "../BaseCard/BaseCard";

import type { ActionCardData } from "../card.types";

// import styles from "./ActionCard.module.css";
import contentStyles from "../cardContent.module.css";

type ActionCardProps = ActionCardData & {
  footer?: ReactNode;
  variant?: BaseCardVariant;
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
