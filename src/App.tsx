import { Dialog } from "./components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { EmptyGoals } from "./components/empty-goals";
import { CreateGoal } from "./components/create-goal";
import { SummaryGoal } from "./components/summary-goal";
import { getSummaryGoal } from "./http/get-summary-goal";

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummaryGoal,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <SummaryGoal /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
