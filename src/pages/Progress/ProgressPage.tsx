import {
  ActivityCard,
  GoalProgressCard,
  InsightCard,
  MetricCard,
  TrendCard,
} from "../../shared/ui/card";

import styles from "./ProgressPage.module.css";

import type {
  ProgressMetricId,
  ProgressPageViewModel,
  ProgressTrendPointId,
} from "./progress.types";
import type { TranslationKey } from "../../app/LocalizationProvider/localization.types";

import { useLocalization } from "../../app/LocalizationProvider/useLocalization";

type ProgressPageProps = {
  data: ProgressPageViewModel;
};

const metricTranslationKeys: Record<ProgressMetricId, TranslationKey> = {
  consistency: "progress.metrics.consistency",
  "weekly-recovery": "progress.metrics.recovery",
};

const trendPointTranslationKeys: Record<ProgressTrendPointId, TranslationKey> =
  {
    "week-1": "progress.trainingLoad.points.week1",
    "week-2": "progress.trainingLoad.points.week2",
    "week-3": "progress.trainingLoad.points.week3",
    "week-4": "progress.trainingLoad.points.week4",
    "week-5": "progress.trainingLoad.points.week5",
    "week-6": "progress.trainingLoad.points.week6",
    "week-7": "progress.trainingLoad.points.now",
  };

export function ProgressPage({ data }: ProgressPageProps) {
  const { t } = useLocalization();

  const localizedTrendPoints = data.trainingLoadTrend.points.map((point) => ({
    ...point,
    label: t(trendPointTranslationKeys[point.id]),
  }));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t("progress.header.eyebrow")}</p>
        <h1 className={styles.title}>{t("progress.header.title")}</h1>
        <p className={styles.subtitle}>{t("progress.header.subtitle")}</p>
      </header>

      <section className={styles.section}>
        <InsightCard
          {...data.weeklySummary}
          title={t("progress.weeklySummary.title")}
          subtitle={t("progress.weeklySummary.subtitle")}
        />
      </section>

      <section className={styles.section}>
        <TrendCard
          {...data.trainingLoadTrend}
          points={localizedTrendPoints}
          title={t("progress.trainingLoad.title")}
          subtitle={t("progress.trainingLoad.subtitle")}
          chartAriaLabel={t("progress.trainingLoad.chartAriaLabel")}
        />
      </section>

      <section className={styles.metricsGrid}>
        {data.metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={{
              ...metric,
              label: t(metricTranslationKeys[metric.id]),
            }}
          />
        ))}
      </section>

      <section className={styles.section}>
        <GoalProgressCard
          {...data.goal}
          title={t("progress.goal.title")}
          subtitle={t("progress.goal.subtitle")}
          currentLabel={t("progress.goal.currentLabel")}
          targetLabel={t("progress.goal.targetLabel")}
        />
      </section>

      <section className={styles.section}>
        <ActivityCard
          {...data.recentAchievement}
          title={t("progress.recentAchievement.title")}
          subtitle={t("progress.recentAchievement.subtitle")}
        />
      </section>
    </div>
  );
}
