import styled from 'styled-components'
import { animated } from 'react-spring'

export const Button = styled.button`
  width: 3rem;
  height: 1.5rem;

  position: absolute;
  right: calc(50% - 1.5rem);

  border: none;
  outline: none;
  border-radius: 16px;

  cursor: pointer;

  background-color: ${(props) => props.theme.thirdBackground};
`

export const ButtonDisplay = styled(animated.div)`
  width: 1rem;
  height: 1rem;

  position: absolute;
  top: 0.25rem;

  border-radius: 50%;

  cursor: inherit;

  background-color: ${(props) => props.theme.primaryTextColor};
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.25rem;

  color: ${(props) => props.theme.primaryTextColor};
`
