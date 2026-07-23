import {
  ActionCard,
  ActivityCard,
  MetricCard,
  TrendCard,
  UpcomingWorkoutCard,
} from "../../shared/ui/card";
import { DailyBriefCard } from "./components/DailyBriefCard/DailyBriefCard";

import styles from "./TodayPage.module.css";

import type { TodayMetricId, TodayPageViewModel } from "./today.types";
import type { TranslationKey } from "../../app/LocalizationProvider/localization.types";

import { useLocalization } from "../../app/LocalizationProvider/useLocalization";

type TodayPageProps = {
  data: TodayPageViewModel;
};

const metricTranslationKeys: Record<TodayMetricId, TranslationKey> = {
  sleep: "today.metrics.sleep",
  restingHeartRate: "today.metrics.restingHeartRate",
  recovery: "today.metrics.recovery",
  trainingLoad: "today.metrics.trainingLoad",
};

export function TodayPage({ data }: TodayPageProps) {
  const { t } = useLocalization();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t("today.header.eyebrow")}</p>
        <h1 className={styles.title}>{t("today.header.title")}</h1>
        <p className={styles.subtitle}>{t("today.header.subtitle")}</p>
      </header>

      <section className={styles.heroSection}>
        <DailyBriefCard data={data.dailyBrief} />
      </section>

      <section className={styles.primarySection}>
        <UpcomingWorkoutCard
          {...data.upcomingWorkout}
          title={t("today.upcomingWorkout.title")}
          subtitle={t("today.upcomingWorkout.subtitle")}
          detailsAriaLabel={t("today.upcomingWorkout.detailsAriaLabel")}
        />
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>
              {t("today.condition.title")}
            </h2>
            <p className={styles.sectionDescription}>
              {t("today.condition.description")}
            </p>
          </div>
        </div>

        <div className={styles.overviewGrid}>
          <div className={styles.metricsGrid}>
            {data.metrics.map((metric) => (
              <MetricCard
                key={metric.id}
                metric={{
                  ...metric,
                  label: t(metricTranslationKeys[metric.id]),
                }}
              />
            ))}
          </div>

          <div className={styles.trend}>
            <TrendCard
              {...data.recoveryTrend}
              title={t("today.recoveryTrend.title")}
              subtitle={t("today.recoveryTrend.subtitle")}
              chartAriaLabel={t("today.recoveryTrend.chartAriaLabel")}
            />
          </div>
        </div>
      </section>

      <section className={styles.secondaryGrid}>
        <ActionCard
          {...data.recommendation}
          title={t("today.recommendation.title")}
          subtitle={t("today.recommendation.subtitle")}
        />
        <ActivityCard
          {...data.recentActivity}
          title={t("today.recentActivity.title")}
          subtitle={t("today.recentActivity.subtitle")}
        />
      </section>
    </div>
  );
}
