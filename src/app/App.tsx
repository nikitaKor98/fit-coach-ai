import { createTodayViewModel } from "../pages/Today/today.viewModel";
import { TodayPage } from "../pages/Today/TodayPage";
import { AppShell } from "../shared/ui/layout/AppShell/AppShell";
import { BottomNavigation } from "../shared/ui/navigation/BottomNavigation/BottomNavigation";
import { navigationMock } from "../shared/ui/navigation/navigation.mock";

const todayViewModel = createTodayViewModel();

function App() {
  return (
    <AppShell navigation={<BottomNavigation items={navigationMock} />}>
      <TodayPage data={todayViewModel} />
    </AppShell>
  );
}

export default App;
