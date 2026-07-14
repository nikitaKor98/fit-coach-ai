import { BaseCard } from "../../../../shared/ui/card";

import styles from "./DailyBriefCard.module.css";

import type { TodayDailyBriefViewModel } from "../../today.types";

type DailyBriefCardProps = {
  data: TodayDailyBriefViewModel;
};

export function DailyBriefCard({ data }: DailyBriefCardProps) {
  return (
    <BaseCard
      title={data.title}
      subtitle={data.subtitle}
      variant="highlighted"
      padding="lg"
    >
      <div className={styles.content}>
        <div className={styles.summary}>
          <div className={styles.scoreBlock}>
            <span className={styles.score}>{data.score}</span>
            <span className={styles.scoreUnit}>%</span>
          </div>

          <div className={styles.statusBlock}>
            <p className={styles.status}>{data.status}</p>
            <p className={styles.explanation}>{data.explanation}</p>
          </div>
        </div>

        <div className={styles.recommendation}>
          <span className={styles.recommendationLabel}>Today</span>
          <p className={styles.recommendationText}>{data.recommendation}</p>
        </div>
      </div>
    </BaseCard>
  );
}
