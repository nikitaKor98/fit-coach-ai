import { BaseCard } from "../../shared/ui/card/BaseCard/BaseCard";

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
        <BaseCard
          title={data.dailyBrief.title}
          subtitle={data.dailyBrief.subtitle}
          variant="highlighted"
        >
          <div className={styles.brief}>
            <p className={styles.briefTitle}>{data.dailyBrief.status}</p>
            <p className={styles.briefText}>{data.dailyBrief.description}</p>
          </div>
        </BaseCard>
      </section>

      <section className={styles.section}>
        <BaseCard
          title={data.recommendation.title}
          subtitle={data.recommendation.subtitle}
        >
          <div className={styles.recommendation}>
            <p className={styles.recommendationTitle}>
              {data.recommendation.name}
            </p>
            <p className={styles.recommendationText}>
              {data.recommendation.description}
            </p>
          </div>
        </BaseCard>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {data.metrics.map((metric) => (
            <BaseCard key={metric.id} title={metric.label}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>
                  {metric.value}
                  {metric.unit}
                </span>
                <span className={styles.metricLabel}>{metric.status}</span>
              </div>
            </BaseCard>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <BaseCard
          title={data.recentActivity.title}
          subtitle={data.recentActivity.subtitle}
        >
          <div className={styles.activity}>
            <p className={styles.activityTitle}>{data.recentActivity.name}</p>
            <p className={styles.activityText}>
              {data.recentActivity.description}
            </p>
          </div>
        </BaseCard>
      </section>
    </div>
  );
}
