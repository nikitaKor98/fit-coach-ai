import { BaseCard } from "../BaseCard/BaseCard";

// import styles from "./ActivityCard.module.css";
import contentStyles from "../cardContent.module.css";

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
      <div className={contentStyles.content}>
        <p className={contentStyles.title}>{activityTitle}</p>
        <p className={contentStyles.description}>{description}</p>
      </div>
    </BaseCard>
  );
}
