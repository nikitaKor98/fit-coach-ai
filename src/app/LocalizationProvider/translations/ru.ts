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
  progress: {
    header: {
      eyebrow: "Прогресс",
      title: "Ваши тренировки движутся вперёд",
      subtitle:
        "Отслеживайте важные изменения и понимайте, что влияет на ваши результаты.",
    },

    weeklySummary: {
      title: "Итоги недели",
      subtitle: "На этой неделе",
    },

    trainingLoad: {
      title: "Тренировочная нагрузка",
      subtitle: "Последние 7 недель",
      chartAriaLabel: "График изменения тренировочной нагрузки",

      points: {
        week1: "Н1",
        week2: "Н2",
        week3: "Н3",
        week4: "Н4",
        week5: "Н5",
        week6: "Н6",
        now: "Сейчас",
      },
    },

    metrics: {
      consistency: "Регулярность",
      recovery: "Восстановление",
    },

    goal: {
      title: "Прогресс цели",
      subtitle: "На этой неделе",
      currentLabel: "Текущее значение",
      targetLabel: "Цель",
    },

    recentAchievement: {
      title: "Последнее достижение",
      subtitle: "На этой неделе",
    },
  },
};
