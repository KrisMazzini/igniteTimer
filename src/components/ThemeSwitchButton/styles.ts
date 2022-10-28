import styled from 'styled-components'

interface ButtonDisplayProps {
  horizontalAlignment: string
}

export const Button = styled.button`
  width: 3rem;
  height: 1.5rem;

  position: absolute;
  right: calc(50% - 1.5rem);

  border: none;
  outline: none;
  border-radius: 16px;

  cursor: pointer;

  background-color: ${(props) => props.theme.background};
`

export const ButtonDisplay = styled.div<ButtonDisplayProps>`
  width: 1rem;
  height: 1rem;

  position: absolute;
  top: 0.25rem;
  ${(props) => `${props.horizontalAlignment}: 0.25rem`};

  border-radius: 50%;

  cursor: inherit;

  background-color: ${(props) => props.theme.primaryTextColor};
`
