import {
  ActionCard,
  ActivityCard,
  MetricCard,
  TrendCard,
  UpcomingWorkoutCard,
} from "../../shared/ui/card";
import { DailyBriefCard } from "./components/DailyBriefCard/DailyBriefCard";

import styles from "./TodayPage.module.css";

import type { TodayPageViewModel } from "./today.types";

type TodayPageProps = {
  data: TodayPageViewModel;
};

export function TodayPage({ data }: TodayPageProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{data.header.eyebrow}</p>
        <h1 className={styles.title}>{data.header.title}</h1>
        <p className={styles.subtitle}>{data.header.subtitle}</p>
      </header>

      <section className={styles.heroSection}>
        <DailyBriefCard data={data.dailyBrief} />
      </section>

      <section className={styles.primarySection}>
        <UpcomingWorkoutCard {...data.upcomingWorkout} />
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Your condition</h2>
            <p className={styles.sectionDescription}>
              Key signals supporting today&apos;s recommendation.
            </p>
          </div>
        </div>

        <div className={styles.overviewGrid}>
          <div className={styles.metricsGrid}>
            {data.metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>

          <div className={styles.trend}>
            <TrendCard {...data.recoveryTrend} />
          </div>
        </div>
      </section>

      <section className={styles.secondaryGrid}>
        <ActionCard {...data.recommendation} />
        <ActivityCard {...data.recentActivity} />
      </section>
    </div>
  );
}
