import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryTextColor};
`

const BaseInput = styled.input`
  height: 2.5rem;

  padding: 0 0.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-weight: bold;
  font-size: 1.125rem;

  color: ${(props) => props.theme.primaryTextColor};
  background: transparent;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  flex-basis: 216px;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 768px) {
    flex-basis: 222px;
  }

  @media (max-width: 533px) {
    flex-basis: 200px;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
