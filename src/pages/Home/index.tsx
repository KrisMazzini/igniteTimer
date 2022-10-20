import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import { HandPalm, Play } from 'phosphor-react'

import {
  HomeContainer,
  FormContainer,
  TaskInput,
  MinutesAmountInput,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  InterruptCountdownButton,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'A task is required'),
  minutesAmount: zod
    .number()
    .min(1, 'The cycle must last at least for 5 minutes')
    .max(60, 'The cycle must last at most for 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  finishDate?: Date
  interruptionDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [totalSecondsSpent, setTotalSecondsSpent] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const secondsLeft = activeCycle ? totalSeconds - totalSecondsSpent : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishDate: new Date() }
              } else {
                return cycle
              }
            }),
          )

          setActiveCycleId(null)
        } else {
          setTotalSecondsSpent(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
      setTotalSecondsSpent(0)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      ...data,
      id: String(new Date().getTime()),
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptionDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const minutesAmount = Math.floor(secondsLeft / 60)
  const secondsAmount = secondsLeft % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${activeCycle.task} - ${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  const task = watch('task')
  const disableForm = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I&apos;m gonna work on</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Give a name for your project"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Projeto xablau 1" />
            <option value="Projeto xablau 2" />
            <option value="Projeto xablau 3" />
            <option value="Projeto xablau 4" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            min={1}
            max={60}
            step={5}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <InterruptCountdownButton
            onClick={handleInterruptCycle}
            type="button"
          >
            <HandPalm size={24} />
            Interrupt
          </InterruptCountdownButton>
        ) : (
          <StartCountdownButton disabled={disableForm} type="submit">
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
