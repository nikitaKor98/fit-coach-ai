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
  goals: {
    header: {
      eyebrow: "Цели",
      title: "Сосредоточьтесь на главном",
      subtitle:
        "Отслеживайте основную цель и промежуточные задачи, которые помогают её достичь.",
    },

    primaryGoal: {
      title: "Основная цель",
      subtitle: "Цель на забег",
    },

    supportingGoals: {
      sectionTitle: "Промежуточные цели",
      sectionDescription:
        "Небольшие этапы, которые приближают вас к основной цели.",
      cardTitle: "Промежуточная цель",
      cardSubtitle: "Текущий цикл",
    },

    goal: {
      currentLabel: "Текущее значение",
      targetLabel: "Цель",
    },

    recommendation: {
      title: "Рекомендация тренера",
      subtitle: "Следующий приоритет",
    },
  },
  ask: {
    preview: {
      title: "Вопрос тренеру",
      subtitle: "Предварительная версия",
      description: "Основа страницы вопросов будет добавлена здесь.",
    },
  },
  profile: {
    header: {
      eyebrow: "Профиль",
      title: "Ваши персональные данные",
      subtitle:
        "Управляйте информацией, которая помогает FitCoach AI учитывать ваши цели, предпочтения и условия тренировок.",
    },

    cards: {
      personalInformation: "Персональная информация",
      trainingPreferences: "Предпочтения в тренировках",
      connectedDevices: "Подключённые устройства",
      dataSources: "Источники данных",
      applicationSettings: "Настройки приложения",
      preferences: "Предпочтения",
    },

    personal: {
      age: "Возраст",
      height: "Рост",
      weight: "Вес",
      location: "Местоположение",
    },

    training: {
      primarySport: "Основной вид спорта",
      weeklyTarget: "Недельная цель",
      longRunDay: "День длительной тренировки",
      restDay: "День отдыха",
      preferredTrainingTime: "Предпочтительное время тренировки",
    },

    devices: {
      lastSync: "Последняя синхронизация",

      status: {
        connected: "Подключено",
        disconnected: "Не подключено",
      },
    },

    settings: {
      units: {
        label: "Единицы измерения",
        description: "Форматы расстояния, веса и температуры.",
      },

      language: {
        label: "Язык",
        description: "Язык интерфейса приложения.",
      },

      theme: {
        label: "Оформление",
        description: "Светлая, тёмная или системная тема.",
      },

      options: {
        english: "English",
        russian: "Русский",
        system: "Системная",
        light: "Светлая",
        dark: "Тёмная",
      },

      soon: "Скоро",
    },
  },
};
