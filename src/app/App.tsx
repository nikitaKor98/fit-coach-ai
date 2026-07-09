import { useState } from "react";

import { AskPage } from "../pages/Ask/AskPage";
import { GoalsPage } from "../pages/Goals/GoalsPage";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { ProgressPage } from "../pages/Progress/ProgressPage";
import { createTodayViewModel } from "../pages/Today/today.viewModel";
import { TodayPage } from "../pages/Today/TodayPage";
import { AppShell } from "../shared/ui/layout/AppShell/AppShell";
import { BottomNavigation } from "../shared/ui/navigation/BottomNavigation/BottomNavigation";
import { navigationMock } from "../shared/ui/navigation/navigation.mock";

import type { NavigationItemId } from "../shared/ui/navigation/navigation.types";

const todayViewModel = createTodayViewModel();

function App() {
  const [activePage, setActivePage] = useState<NavigationItemId>("today");

  const navigationItems = navigationMock.map((item) => ({
    ...item,
    isActive: item.id === activePage,
  }));

  const renderPage = () => {
    switch (activePage) {
      case "today":
        return <TodayPage data={todayViewModel} />;
      case "progress":
        return <ProgressPage />;
      case "ask":
        return <AskPage />;
      case "goals":
        return <GoalsPage />;
      case "profile":
        return <ProfilePage />;
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
