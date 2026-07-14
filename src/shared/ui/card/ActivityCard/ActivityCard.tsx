import { BaseCard } from "../BaseCard/BaseCard";

import type { ActivityCardData } from "../card.types";

// import styles from "./ActivityCard.module.css";
import contentStyles from "../cardContent.module.css";

type ActivityCardProps = ActivityCardData;

export function ActivityCard({
  title,
  subtitle,
  activityTitle,
  description,
}: ActivityCardProps) {
  return (
    <BaseCard title={title} subtitle={subtitle}>
      <div className={contentStyles.content}>
        <p className={contentStyles.title}>{activityTitle}</p>
        <p className={contentStyles.description}>{description}</p>
      </div>
    </BaseCard>
  );
}
