import { NoHistoryIndicatorContainer } from './styles'
import { ClipboardText } from 'phosphor-react'

export function EmptyHistoryList() {
  return (
    <NoHistoryIndicatorContainer>
      <p>
        You have not started any cycle yet.
        <span>
          Create new cycles and keep track of all your ongoing, interrupted and
          completed activities.
        </span>
      </p>
      <ClipboardText size={96} />
    </NoHistoryIndicatorContainer>
  )
}
