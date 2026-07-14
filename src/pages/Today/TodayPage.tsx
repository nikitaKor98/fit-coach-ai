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

      <section className={styles.section}>
        <div className={styles.grid}>
          {data.metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <TrendCard {...data.recoveryTrend} />
      </section>

      <section className={styles.section}>
        <ActionCard {...data.recommendation} />
      </section>

      <section className={styles.section}>
        <ActivityCard {...data.recentActivity} />
      </section>
    </div>
  );
}
