import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../..'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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
