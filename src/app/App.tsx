import { createTodayViewModel } from "../pages/Today/today.viewModel";
import { TodayPage } from "../pages/Today/TodayPage";
import { AppShell } from "../shared/ui/layout/AppShell/AppShell";

const todayViewModel = createTodayViewModel();

function App() {
  return (
    <AppShell>
      <TodayPage data={todayViewModel} />
    </AppShell>
  );
}

export default App;
