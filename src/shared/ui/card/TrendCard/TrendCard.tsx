import { BaseCard } from "../BaseCard/BaseCard";

import type { TrendDirection } from "../../../types";
import type { TrendCardData } from "../card.types";

import contentStyles from "../cardContent.module.css";
import styles from "./TrendCard.module.css";

type TrendCardProps = TrendCardData;

const directionSymbols: Record<TrendDirection, string> = {
  up: "↑",
  down: "↓",
  stable: "→",
};

export function TrendCard({
  title,
  subtitle,
  summary,
  description,
  direction,
  change,
  points,
}: TrendCardProps) {
  const maximumValue = Math.max(...points.map((point) => point.value), 1);

  return (
    <BaseCard title={title} subtitle={subtitle}>
      <div className={contentStyles.content}>
        <div className={styles.summary}>
          <p className={contentStyles.title}>{summary}</p>

          {change && (
            <span
              className={[styles.change, styles[`direction-${direction}`]].join(
                " ",
              )}
            >
              {directionSymbols[direction]} {change}
            </span>
          )}
        </div>

        <div className={styles.chart} aria-label={`${title} trend`}>
          {points.map((point) => {
            const height = `${Math.max(
              (point.value / maximumValue) * 100,
              8,
            )}%`;

            return (
              <div key={point.id} className={styles.point}>
                <div className={styles.barTrack}>
                  <span
                    className={styles.bar}
                    style={{ height }}
                    title={`${point.label}: ${point.value}`}
                  />
                </div>

                <span className={styles.pointLabel}>{point.label}</span>
              </div>
            );
          })}
        </div>

        {description && (
          <p className={contentStyles.description}>{description}</p>
        )}
      </div>
    </BaseCard>
  );
}
