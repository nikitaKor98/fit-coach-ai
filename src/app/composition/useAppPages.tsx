import { useMemo, type ReactNode } from "react";

import type { NavigationItemId } from "../../shared/ui/navigation/navigation.types";

import { useSettings } from "../SettingsProvider/useSettings";

import { createTodayViewModel } from "../../pages/Today/today.viewModel";
import { createProgressViewModel } from "../../pages/Progress/progress.viewModel";
import { createGoalsViewModel } from "../../pages/Goals/goals.viewModele";
import { createProfileViewModel } from "../../pages/Profile/profile.viewModel";

import { TodayPage } from "../../pages/Today/TodayPage";
import { ProgressPage } from "../../pages/Progress/ProgressPage";
import { AskPage } from "../../pages/Ask/AskPage";
import { GoalsPage } from "../../pages/Goals/GoalsPage";
import { ProfilePage } from "../../pages/Profile/ProfilePage";

type AppPages = Record<NavigationItemId, ReactNode>;

export function useAppPages(): AppPages {
  const { settings, setTheme, setLanguage, setUnits } = useSettings();

  return useMemo(
    () => ({
      today: <TodayPage data={createTodayViewModel()} />,

      progress: <ProgressPage data={createProgressViewModel()} />,

      ask: <AskPage />,

      goals: <GoalsPage data={createGoalsViewModel()} />,

      profile: (
        <ProfilePage
          data={createProfileViewModel(settings)}
          actions={{
            onThemeChange: setTheme,
            onLanguageChange: setLanguage,
            onUnitsChange: setUnits,
          }}
        />
      ),
    }),
    [settings, setTheme],
  );
}
