import { BaseCard } from "../BaseCard/BaseCard";

import type { UpcomingWorkoutCardData } from "../card.types";

import contentStyles from "../cardContent.module.css";
import styles from "./UpcomingWorkoutCard.module.css";

type UpcomingWorkoutCardProps = UpcomingWorkoutCardData;

export function UpcomingWorkoutCard({
  title,
  subtitle,
  workoutName,
  duration,
  distance,
  intensity,
  startTime,
  description,
  detailsAriaLabel = "Workout details",
  variant = "default",
}: UpcomingWorkoutCardProps) {
  const details = [duration, distance, intensity, startTime].filter(
    (detail): detail is string => Boolean(detail),
  );

  return (
    <BaseCard title={title} subtitle={subtitle} variant={variant}>
      <div className={contentStyles.content}>
        <p className={contentStyles.title}>{workoutName}</p>

        {details.length > 0 && (
          <ul className={styles.details} aria-label={detailsAriaLabel}>
            {details.map((detail) => (
              <li key={detail} className={styles.detail}>
                {detail}
              </li>
            ))}
          </ul>
        )}

        {description && (
          <p className={contentStyles.description}>{description}</p>
        )}
      </div>
    </BaseCard>
  );
}
