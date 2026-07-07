import { BaseCard } from "../../shared/ui/card/BaseCard/BaseCard";

import styles from "./TodayPage.module.css";

export function TodayPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Today</p>
        <h1 className={styles.title}>Good morning</h1>
        <p className={styles.subtitle}>
          Your body is ready for a controlled training day.
        </p>
      </header>

      <section className={styles.section}>
        <BaseCard title="Daily Brief" subtitle="AI Coach" variant="highlighted">
          <div className={styles.brief}>
            <p className={styles.briefTitle}>Ready for training</p>
            <p className={styles.briefText}>
              Recovery is slightly above your weekly average. Today is a good
              day to complete your planned workout, but avoid adding extra
              intensity.
            </p>
          </div>
        </BaseCard>
      </section>

      <section className={styles.section}>
        <BaseCard title="Today's Recommendation" subtitle="Training">
          <div className={styles.recommendation}>
            <p className={styles.recommendationTitle}>Threshold run</p>
            <p className={styles.recommendationText}>
              Keep the session controlled and focus on stable pacing.
            </p>
          </div>
        </BaseCard>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <BaseCard title="Recovery" subtitle="Readiness">
            <div className={styles.metric}>
              <span className={styles.metricValue}>87%</span>
              <span className={styles.metricLabel}>Good</span>
            </div>
          </BaseCard>

          <BaseCard title="Sleep" subtitle="Last night">
            <div className={styles.metric}>
              <span className={styles.metricValue}>7h 48m</span>
              <span className={styles.metricLabel}>Normal</span>
            </div>
          </BaseCard>
        </div>
      </section>

      <section className={styles.section}>
        <BaseCard title="Recent Activity" subtitle="Yesterday">
          <div className={styles.activity}>
            <p className={styles.activityTitle}>Easy run</p>
            <p className={styles.activityText}>10.2 km · 54 min · 142 bpm</p>
          </div>
        </BaseCard>
      </section>
    </div>
  );
}
