import { useContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CyclesContext } from '../../../../contexts/CyclesContext'

import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)

  const [totalSecondsSpent, setTotalSecondsSpent] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const secondsLeft = activeCycle ? totalSeconds - totalSecondsSpent : 0

  const minutesAmount = Math.floor(secondsLeft / 60)
  const secondsAmount = secondsLeft % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${activeCycle.task} - ${minutes}:${seconds}`
    } else {
      document.title = 'Ignite Timer'
      setTotalSecondsSpent(0)
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setTotalSecondsSpent(0)
          clearInterval(interval)
        } else {
          setTotalSecondsSpent(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished])

  return (
    <CountdownContainer>
      <p>Minutes</p>
      <div>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
      </div>
      <Separator>:</Separator>
      <p>Seconds</p>
      <div>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </div>
    </CountdownContainer>
  )
}
