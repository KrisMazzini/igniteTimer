import styled from 'styled-components'

export const HistoryListContainer = styled.div`
  height: 100%;

  flex: 1;
  margin-top: 2rem;

  overflow: auto;

  table {
    min-width: 600px;
    width: 100%;

    border-collapse: collapse;

    th {
      padding: 1rem;

      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;

      background-color: ${(props) => props.theme.thirdBackground};
      color: ${(props) => props.theme.primaryTextColor};

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;
      border-top: 4px solid ${(props) => props.theme.primaryBackground};

      font-size: 0.875rem;
      line-height: 1.6;

      background-color: ${(props) => props.theme.secondaryBackground};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';

    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;

    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
