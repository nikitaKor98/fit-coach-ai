import { createTodayViewModel } from "../pages/Today/today.viewModel";
import { TodayPage } from "../pages/Today/TodayPage";
import { AppShell } from "../shared/ui/layout/AppShell/AppShell";
import { BottomNavigation } from "../shared/ui/navigation/BottomNavigation/BottomNavigation";

const todayViewModel = createTodayViewModel();

const navigationItems = [
  { id: "today", label: "Today", isActive: true },
  { id: "progress", label: "Progress" },
  { id: "ask", label: "Ask", isPrimary: true },
  { id: "goals", label: "Goals" },
  { id: "profile", label: "Profile" },
];

function App() {
  return (
    <AppShell navigation={<BottomNavigation items={navigationItems} />}>
      <TodayPage data={todayViewModel} />
    </AppShell>
  );
}

export default App;
