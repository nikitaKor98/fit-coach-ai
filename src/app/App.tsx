import { useState } from "react";

import { AskPage } from "../pages/Ask/AskPage";
import { GoalsPage } from "../pages/Goals/GoalsPage";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { ProgressPage } from "../pages/Progress/ProgressPage";
import { TodayPage } from "../pages/Today/TodayPage";
import { AppShell } from "../shared/ui/layout/AppShell/AppShell";
import { BottomNavigation } from "../shared/ui/navigation/BottomNavigation/BottomNavigation";

import { navigationMock } from "../shared/ui/navigation/navigation.mock";

import { createTodayViewModel } from "../pages/Today/today.viewModel";
import { createProgressViewModel } from "../pages/Progress/progress.viewModel";
import { createGoalsViewModel } from "../pages/Goals/goals.viewModele";
import { createProfileViewModel } from "../pages/Profile/profile.viewModel";

import type { NavigationItemId } from "../shared/ui/navigation/navigation.types";

import { useSettings } from "./SettingsProvider/useSettings";

const todayViewModel = createTodayViewModel();
const progressViewModel = createProgressViewModel();
const goalsViewModel = createGoalsViewModel();

function App() {
  const [activePage, setActivePage] = useState<NavigationItemId>("today");

  const navigationItems = navigationMock.map((item) => ({
    ...item,
    isActive: item.id === activePage,
  }));

  const { settings, setTheme, setLanguage, setUnits } = useSettings();

  const renderPage = () => {
    switch (activePage) {
      case "today":
        return <TodayPage data={todayViewModel} />;
      case "progress":
        return <ProgressPage data={progressViewModel} />;
      case "ask":
        return <AskPage />;
      case "goals":
        return <GoalsPage data={goalsViewModel} />;
      case "profile":
        return (
          <ProfilePage
            data={createProfileViewModel(settings)}
            actions={{
              onThemeChange: setTheme,
              onLanguageChange: setLanguage,
              onUnitsChange: setUnits,
            }}
          />
        );
      default:
        return <TodayPage data={todayViewModel} />;
    }
  };

  return (
    <AppShell
      navigation={
        <BottomNavigation items={navigationItems} onSelect={setActivePage} />
      }
    >
      {renderPage()}
    </AppShell>
  );
}

export default App;
