import { useState } from "react";

import { AppShell } from "../shared/ui/layout/AppShell/AppShell";
import { BottomNavigation } from "../shared/ui/navigation/BottomNavigation/BottomNavigation";

import { navigationMock } from "../shared/ui/navigation/navigation.mock";

import type { NavigationItemId } from "../shared/ui/navigation/navigation.types";

import { useAppPages } from "./composition/useAppPages";
import { useSettings } from "./SettingsProvider/useSettings";

function App() {
  const [activePage, setActivePage] = useState<NavigationItemId>("today");

  const pages = useAppPages();

  const navigationItems = navigationMock.map((item) => ({
    ...item,
    isActive: item.id === activePage,
  }));

  const { setLanguage } = useSettings();

  return (
    <AppShell
      navigation={
        <BottomNavigation items={navigationItems} onSelect={setActivePage} />
      }
    >
      <button type="button" onClick={() => setLanguage("en")}>
        EN
      </button>

      <button type="button" onClick={() => setLanguage("ru")}>
        RU
      </button>
      {pages[activePage]}
    </AppShell>
  );
}

export default App;
