import type { Metric } from "../../../types";

import { BaseCard } from "../BaseCard/BaseCard";

import styles from "./MetricCard.module.css";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  const displayValue = `${metric.value}${metric.unit ?? ""}`;

  return (
    <BaseCard title={metric.label}>
      <div className={styles.metric}>
        <span className={styles.value}>{displayValue}</span>

        {metric.status && (
          <span className={styles.status}>{metric.status}</span>
        )}

        {metric.trend && (
          <span className={styles.trend}>
            {metric.trend.direction === "up" && "↑ "}
            {metric.trend.direction === "down" && "↓ "}
            {metric.trend.direction === "stable" && "→ "}
            {metric.trend.value}
            {metric.trend.unit ?? ""} {metric.trend.period}
          </span>
        )}
      </div>
    </BaseCard>
  );
}
