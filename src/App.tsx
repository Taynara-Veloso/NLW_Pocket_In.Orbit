import { CreateGoal } from "./components/create-goal";
import { EmptyGoals } from "./components/empty-goals";
import { SummaryGoal } from "./components/summary-goal";
import { Dialog } from "./components/ui/dialog";

export function App() {
  return (
    <Dialog>
      <EmptyGoals />
      <CreateGoal />
      <SummaryGoal />
    </Dialog>
  )
}
