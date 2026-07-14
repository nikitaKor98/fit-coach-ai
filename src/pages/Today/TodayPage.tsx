import {
  ActionCard,
  ActivityCard,
  InsightCard,
  MetricCard,
  UpcomingWorkoutCard,
} from "../../shared/ui/card";

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

      <section className={styles.section}>
        <InsightCard
          title={data.dailyBrief.title}
          subtitle={data.dailyBrief.subtitle}
          insight={data.dailyBrief.insight}
          explanation={data.dailyBrief.explanation}
        />
      </section>

      <section className={styles.section}>
        <UpcomingWorkoutCard
          title={data.upcomingWorkout.title}
          subtitle={data.upcomingWorkout.subtitle}
          workoutName={data.upcomingWorkout.workoutName}
          duration={data.upcomingWorkout.duration}
          distance={data.upcomingWorkout.distance}
          intensity={data.upcomingWorkout.intensity}
          startTime={data.upcomingWorkout.startTime}
          description={data.upcomingWorkout.description}
        />
      </section>

      <section className={styles.section}>
        <ActionCard
          title={data.recommendation.title}
          subtitle={data.recommendation.subtitle}
          actionTitle={data.recommendation.actionTitle}
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
          activityTitle={data.recentActivity.activityTitle}
          description={data.recentActivity.description}
        />
      </section>
    </div>
  );
}
