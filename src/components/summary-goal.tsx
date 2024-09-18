import { CheckCircle2, Plus } from "lucide-react";
import { InOrbitIcon } from "./in-orbit-icon";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";

export function SummaryGoal() {
  return (
    <div className="flex flex-col gap-6 py-10 max-w-[480px] px-5 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">1 a 7 de Setembro</span>
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
          <ProgressIndicator style={{width: '50%'}}/>
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou &nbsp;
            <span className="text-zinc-100">
              8
            </span> 
            &nbsp; de &nbsp;
            <span className="text-zinc-100">
              15
            </span>
            &nbsp; metas nessa semana.
          </span>
          <span>58%</span>
        </div>
      </div>
      <Separator />
      <div>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600"/>
          Meditar
        </OutlineButton>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">
          Sua semana
        </h2>
        <span className="text-zinc-400 text-sm">Você ainda não completou nenhuma meta essa semana.</span>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            DiaDaSemanaAQUI &nbsp;
            <span className="text-zinc-400 text-xs">
              DataAQUI
            </span>
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">
                  Acordar cedo
                </span>
                " às &nbsp;
                <span className="text-zinc-100">
                  08:13h
                </span>
              </span>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  )
}
