import { ActionCard, GoalProgressCard } from "../../shared/ui/card";

import styles from "./GoalsPage.module.css";

import { useLocalization } from "../../app/LocalizationProvider/useLocalization";

import type { GoalsPageViewModel } from "./goals.types";

type GoalsPageProps = {
  data: GoalsPageViewModel;
};

export function GoalsPage({ data }: GoalsPageProps) {
  const { t } = useLocalization();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t("goals.header.eyebrow")}</p>
        <h1 className={styles.title}>{t("goals.header.title")}</h1>
        <p className={styles.subtitle}>{t("goals.header.subtitle")}</p>
      </header>

      <section className={styles.primaryGoal}>
        <GoalProgressCard
          {...data.primaryGoal}
          title={t("goals.primaryGoal.title")}
          subtitle={t("goals.primaryGoal.subtitle")}
          currentLabel={t("goals.goal.currentLabel")}
          targetLabel={t("goals.goal.targetLabel")}
        />
      </section>

      <section className={styles.supportingSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t("goals.supportingGoals.sectionTitle")}
          </h2>

          <p className={styles.sectionDescription}>
            {t("goals.supportingGoals.sectionDescription")}
          </p>
        </div>

        <div className={styles.goalsGrid}>
          {data.supportingGoals.map((goal) => (
            <GoalProgressCard
              key={goal.id}
              {...goal}
              title={t("goals.supportingGoals.cardTitle")}
              subtitle={t("goals.supportingGoals.cardSubtitle")}
              currentLabel={t("goals.goal.currentLabel")}
              targetLabel={t("goals.goal.targetLabel")}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <ActionCard
          {...data.recommendation}
          title={t("goals.recommendation.title")}
          subtitle={t("goals.recommendation.subtitle")}
        />
      </section>
    </div>
  );
}
