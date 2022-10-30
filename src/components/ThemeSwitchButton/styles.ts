import styled from 'styled-components'
import { animated } from 'react-spring'

export const Button = styled.button`
  width: 48px;
  height: 24px;

  position: absolute;
  right: calc(50% - 24px);

  border: none;
  outline: none;
  border-radius: 16px;

  cursor: pointer;

  background-color: ${(props) => props.theme.secondaryBackground};
`

export const ButtonDisplay = styled(animated.div)`
  width: 16px;
  height: 16px;

  position: absolute;
  top: 4px;

  border-radius: 50%;

  cursor: inherit;

  background-color: ${(props) => props.theme.primaryTextColor};
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4px;

  color: ${(props) => props.theme.primaryTextColor};
`
