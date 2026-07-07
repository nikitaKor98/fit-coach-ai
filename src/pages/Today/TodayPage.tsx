import {
  ActionCard,
  ActivityCard,
  InsightCard,
  MetricCard,
} from "../../shared/ui/card";

import styles from "./TodayPage.module.css";

import type { TodayPageData } from "./today.types";

type TodayPageProps = {
  data: TodayPageData;
};

export function TodayPage({ data }: TodayPageProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{data.header.eyebrow}</p>
        <h1 className={styles.title}>{data.header.title}</h1>
        <p className={styles.subtitle}>{data.header.subtitle}</p>
      </header>

      <section className={styles.section}>
        <InsightCard
          title={data.dailyBrief.title}
          subtitle={data.dailyBrief.subtitle}
          insight={data.dailyBrief.status}
          explanation={data.dailyBrief.description}
        />
      </section>

      <section className={styles.section}>
        <ActionCard
          title={data.recommendation.title}
          subtitle={data.recommendation.subtitle}
          actionTitle={data.recommendation.name}
          description={data.recommendation.description}
        />
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {data.metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <ActivityCard
          title={data.recentActivity.title}
          subtitle={data.recentActivity.subtitle}
          activityTitle={data.recentActivity.name}
          description={data.recentActivity.description}
        />
      </section>
    </div>
  );
}
