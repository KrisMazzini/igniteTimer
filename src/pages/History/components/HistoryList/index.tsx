import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'

import { CyclesContext } from '../../../../contexts/CyclesContext'

import { HistoryListContainer, Status } from './styles'

export function HistoryList() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryListContainer>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
            <th>Start</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cycles?.map((cycle) => {
            return (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishDate && (
                    <Status statusColor="green">Finished</Status>
                  )}
                  {cycle.interruptionDate && (
                    <Status statusColor="red">Interrupted</Status>
                  )}
                  {!cycle.finishDate && !cycle.interruptionDate && (
                    <Status statusColor="yellow">Ongoing</Status>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </HistoryListContainer>
  )
}
