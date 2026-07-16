import { ActionCard, GoalProgressCard } from "../../shared/ui/card";

import styles from "./GoalsPage.module.css";

import type { GoalsPageViewModel } from "./goals.types";

type GoalsPageProps = {
  data: GoalsPageViewModel;
};

export function GoalsPage({ data }: GoalsPageProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{data.header.eyebrow}</p>
        <h1 className={styles.title}>{data.header.title}</h1>
        <p className={styles.subtitle}>{data.header.subtitle}</p>
      </header>

      <section className={styles.primaryGoal}>
        <GoalProgressCard {...data.primaryGoal} />
      </section>

      <section className={styles.supportingSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Supporting goals</h2>
          <p className={styles.sectionDescription}>
            Smaller milestones that move you toward the primary goal.
          </p>
        </div>

        <div className={styles.goalsGrid}>
          {data.supportingGoals.map((goal) => (
            <GoalProgressCard key={goal.goalName} {...goal} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <ActionCard {...data.recommendation} />
      </section>
    </div>
  );
}
