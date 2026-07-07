import { BaseCard } from "../BaseCard/BaseCard";

import styles from "./InsightCard.module.css";
import contentStyles from "../cardContent.module.css";

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
      <div className={contentStyles.content}>
        <p className={contentStyles.title}>{insight}</p>
        <p className={contentStyles.description}>{explanation}</p>
      </div>
    </BaseCard>
  );
}
