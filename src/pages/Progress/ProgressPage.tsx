import {
  ActivityCard,
  GoalProgressCard,
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
        <GoalProgressCard {...data.goal} />
      </section>

      <section className={styles.section}>
        <ActivityCard {...data.recentAchievement} />
      </section>
    </div>
  );
}
