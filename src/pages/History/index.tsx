import { useContext } from 'react'

import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryList } from './components/HistoryList'
import { EmptyHistoryList } from './components/EmptyHistoryList'

import { HistoryContainer } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  const hasCycles = cycles.length

  return (
    <HistoryContainer>
      <h1>My History</h1>
      {hasCycles ? <HistoryList /> : <EmptyHistoryList />}
    </HistoryContainer>
  )
}
