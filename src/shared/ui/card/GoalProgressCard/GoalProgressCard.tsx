import { BaseCard } from "../BaseCard/BaseCard";

import type { GoalProgressCardData } from "../card.types";

import contentStyles from "../cardContent.module.css";
import styles from "./GoalProgressCard.module.css";

type GoalProgressCardProps = GoalProgressCardData;

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 100);
}

export function GoalProgressCard({
  title,
  subtitle,
  goalName,
  currentValue,
  targetValue,
  progress,
  description,
}: GoalProgressCardProps) {
  const normalizedProgress = clampProgress(progress);

  return (
    <BaseCard title={title} subtitle={subtitle}>
      <div className={contentStyles.content}>
        <div className={styles.header}>
          <p className={contentStyles.title}>{goalName}</p>

          <span className={styles.progressLabel}>{normalizedProgress}%</span>
        </div>

        <div
          className={styles.track}
          role="progressbar"
          aria-label={goalName}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={normalizedProgress}
        >
          <span
            className={styles.value}
            style={{ width: `${normalizedProgress}%` }}
          />
        </div>

        <div className={styles.values}>
          <span>{currentValue}</span>
          <span>{targetValue}</span>
        </div>

        {description && (
          <p className={contentStyles.description}>{description}</p>
        )}
      </div>
    </BaseCard>
  );
}
