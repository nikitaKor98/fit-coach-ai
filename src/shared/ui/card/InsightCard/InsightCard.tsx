import { BaseCard } from "../BaseCard/BaseCard";

import styles from "./InsightCard.module.css";

type InsightCardProps = {
  title: string;
  subtitle?: string;
  insight: string;
  explanation: string;
  variant?: "default" | "highlighted" | "muted";
};

export function InsightCard({
  title,
  subtitle,
  insight,
  explanation,
  variant = "highlighted",
}: InsightCardProps) {
  return (
    <BaseCard title={title} subtitle={subtitle} variant={variant}>
      <div className={styles.insight}>
        <p className={styles.title}>{insight}</p>
        <p className={styles.explanation}>{explanation}</p>
      </div>
    </BaseCard>
  );
}
