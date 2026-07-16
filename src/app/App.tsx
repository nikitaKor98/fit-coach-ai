import { useState } from "react";

import { AppShell } from "../shared/ui/layout/AppShell/AppShell";
import { BottomNavigation } from "../shared/ui/navigation/BottomNavigation/BottomNavigation";

import { navigationMock } from "../shared/ui/navigation/navigation.mock";

import type { NavigationItemId } from "../shared/ui/navigation/navigation.types";

import { useAppPages } from "./composition/useAppPages";

function App() {
  const [activePage, setActivePage] = useState<NavigationItemId>("today");

  const pages = useAppPages();

  const navigationItems = navigationMock.map((item) => ({
    ...item,
    isActive: item.id === activePage,
  }));

  return (
    <AppShell
      navigation={
        <BottomNavigation items={navigationItems} onSelect={setActivePage} />
      }
    >
      {pages[activePage]}
    </AppShell>
  );
}

export default App;
