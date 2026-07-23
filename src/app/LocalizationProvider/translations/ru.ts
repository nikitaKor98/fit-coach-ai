import type { TranslationDictionary } from "../localization.types";

export const ru: TranslationDictionary = {
  navigation: {
    today: "Сегодня",
    progress: "Прогресс",
    ask: "Спросить",
    goals: "Цели",
    profile: "Профиль",
  },

  today: {
    header: {
      eyebrow: "Сегодня",
      title: "Ваш план тренировок на сегодня",
      subtitle:
        "Сохраняйте регулярность и сосредоточьтесь на самых важных действиях на сегодня.",
    },

    condition: {
      title: "Ваше состояние",
      description:
        "Ключевые показатели, на которых основана сегодняшняя рекомендация.",
    },

    dailyBrief: {
      title: "Краткая сводка",
      subtitle: "Обзор готовности на сегодня",
      recommendationLabel: "Сегодня",
    },

    upcomingWorkout: {
      title: "Предстоящая тренировка",
      subtitle: "Следующая запланированная тренировка",
      detailsAriaLabel: "Параметры тренировки",
    },

    metrics: {
      sleep: "Сон",
      restingHeartRate: "Пульс в покое",
      recovery: "Восстановление",
      trainingLoad: "Тренировочная нагрузка",
    },

    recoveryTrend: {
      title: "Динамика восстановления",
      subtitle: "Последние 7 дней",
      chartAriaLabel: "График динамики восстановления",
    },

    recommendation: {
      title: "Рекомендация на сегодня",
      subtitle: "Тренировка",
    },

    recentActivity: {
      title: "Последняя активность",
      subtitle: "Вчера",
    },

    sections: {
      upcomingWorkout: "Предстоящая тренировка",
      metrics: "Показатели за сегодня",
      weeklyProgress: "Прогресс за неделю",
      recommendation: "Рекомендация тренера",
      recentActivity: "Недавняя активность",
    },

    labels: {
      duration: "Продолжительность",
      distance: "Дистанция",
      pace: "Темп",
      heartRate: "Пульс",
    },

    actions: {
      startWorkout: "Начать тренировку",
      viewDetails: "Подробнее",
      viewProgress: "Посмотреть прогресс",
      openActivity: "Открыть активность",
    },
  },
};
