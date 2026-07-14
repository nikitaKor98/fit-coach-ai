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
}: UpcomingWorkoutCardProps) {
  const details = [duration, distance, intensity, startTime].filter(Boolean);

  return (
    <BaseCard title={title} subtitle={subtitle}>
      <div className={contentStyles.content}>
        <p className={contentStyles.title}>{workoutName}</p>

        {details.length > 0 && (
          <ul className={styles.details} aria-label="Workout details">
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
