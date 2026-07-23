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
  currentLabel = "Current",
  targetLabel = "Target",
  progress,
  deadline,
  description,
  variant = "default",
}: GoalProgressCardProps) {
  const normalizedProgress = clampProgress(progress);
  const hasValues = currentValue || targetValue;

  return (
    <BaseCard title={title} subtitle={subtitle} variant={variant}>
      <div className={contentStyles.content}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={contentStyles.title}>{goalName}</p>

            {deadline && <span className={styles.deadline}>{deadline}</span>}
          </div>

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

        {hasValues && (
          <div className={styles.values}>
            <span>{currentValue ?? currentLabel}</span>
            <span>{targetValue ?? targetLabel}</span>
          </div>
        )}

        {description && (
          <p className={contentStyles.description}>{description}</p>
        )}
      </div>
    </BaseCard>
  );
}
