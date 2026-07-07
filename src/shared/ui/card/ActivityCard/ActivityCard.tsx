import { BaseCard } from "../BaseCard/BaseCard";

import styles from "./ActivityCard.module.css";

type ActivityCardProps = {
  title: string;
  subtitle?: string;
  activityTitle: string;
  description: string;
};

export function ActivityCard({
  title,
  subtitle,
  activityTitle,
  description,
}: ActivityCardProps) {
  return (
    <BaseCard title={title} subtitle={subtitle}>
      <div className={styles.activity}>
        <p className={styles.title}>{activityTitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </BaseCard>
  );
}
