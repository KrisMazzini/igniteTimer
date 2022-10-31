import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../../contexts/CyclesContext'
import { Cycle } from '../../../../reducers/cycles/reducer'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext)
  const { register } = useFormContext()

  const uniqueCycleTasks = cycles.reduce(getUniqueCycleTasks, [])

  function getUniqueCycleTasks(uniqueCycles: Cycle[], currentCycle: Cycle) {
    const isCycleUnique = !uniqueCycles.some(
      (cycle) => cycle.task === currentCycle.task,
    )

    if (isCycleUnique) {
      uniqueCycles = [...uniqueCycles, currentCycle]
    }

    return uniqueCycles
  }

  return (
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
        {uniqueCycleTasks.map((cycle) => (
          <option value={cycle.task} key={cycle.id} />
        ))}
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        min={5}
        max={60}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
