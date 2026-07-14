import {
  ActivityCard,
  BaseCard,
  InsightCard,
  MetricCard,
  TrendCard,
} from "../../shared/ui/card";

import styles from "./ProgressPage.module.css";

import type { ProgressPageViewModel } from "./progress.types";

type ProgressPageProps = {
  data: ProgressPageViewModel;
};

export function ProgressPage({ data }: ProgressPageProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{data.header.eyebrow}</p>
        <h1 className={styles.title}>{data.header.title}</h1>
        <p className={styles.subtitle}>{data.header.subtitle}</p>
      </header>

      <section className={styles.section}>
        <InsightCard {...data.weeklySummary} />
      </section>

      <section className={styles.section}>
        <TrendCard {...data.trainingLoadTrend} />
      </section>

      <section className={styles.metricsGrid}>
        {data.metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className={styles.section}>
        <BaseCard title={data.goal.title} subtitle={data.goal.subtitle}>
          <div className={styles.goal}>
            <div className={styles.goalHeader}>
              <p className={styles.goalName}>{data.goal.goalName}</p>

              <span className={styles.goalProgress}>{data.goal.progress}%</span>
            </div>

            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-label={data.goal.goalName}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={data.goal.progress}
            >
              <span
                className={styles.progressValue}
                style={{ width: `${data.goal.progress}%` }}
              />
            </div>

            <div className={styles.goalValues}>
              <span>{data.goal.currentValue}</span>
              <span>{data.goal.targetValue}</span>
            </div>

            {data.goal.description && (
              <p className={styles.goalDescription}>{data.goal.description}</p>
            )}
          </div>
        </BaseCard>
      </section>

      <section className={styles.section}>
        <ActivityCard {...data.recentAchievement} />
      </section>
    </div>
  );
}
