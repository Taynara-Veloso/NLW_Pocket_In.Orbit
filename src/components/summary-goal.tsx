import dayjs from "dayjs";
import { Button } from "./ui/button";
import ptBR from 'dayjs/locale/pt-BR';
import { Separator } from "./ui/separator";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./in-orbit-icon";
import { PendingGoals } from "./pending-goals";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, Plus } from "lucide-react";
import { getSummaryGoal } from "../http/get-summary-goal";
import { Progress, ProgressIndicator } from "./ui/progress-bar";

dayjs.locale(ptBR)

export function SummaryGoal() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummaryGoal,
    staleTime: 1000 * 60, // 60 seconds
  })

  if(!data) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf('week').format('D')
  const lastDayOfWeek = dayjs().endOf('week').format('D')
  const monthOfTheYear = dayjs().endOf('week').format('MMMM')

  const completedPercentage = Math.round((data.completed * 100)/ data.total)

  return (
    <div className="flex flex-col gap-6 py-10 max-w-[480px] px-5 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">
            {firstDayOfWeek} a {lastDayOfWeek} de <span className="capitalize">{monthOfTheYear}</span>
          </span>
        </div>
        <DialogTrigger>
          <Button>
            <Plus className="size-4"/>
            Cadastrar Meta
          </Button>
        </DialogTrigger>
      </div>
      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{width: `${completedPercentage}%`}}/>
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou &nbsp;
            <span className="text-zinc-100">
              {data?.completed}
            </span> 
            &nbsp; de &nbsp;
            <span className="text-zinc-100">
              {data?.total}
            </span>
            &nbsp; metas nessa semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format('dddd')
          const formattedDate = dayjs(date).format('D[ de ]MMMM')
          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium">
                <span className="capitalize">
                  {weekDay}
                </span> &nbsp;
                <span className="text-zinc-400 text-xs">
                  ({formattedDate})
                </span>
              </h3>
              <ul className="flex flex-col gap-3">
                {goals.map(goal => {
                  const time = dayjs(goal.completedAt).format('HH:mm')

                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500"/>
                      <span className="text-sm text-zinc-400">
                        Você completou "
                        <span className="text-zinc-100">
                          {goal.title}
                        </span>
                        " às&nbsp;
                        <span className="text-zinc-100">
                          {time}h
                        </span>
                      </span>
                    </li> 
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
