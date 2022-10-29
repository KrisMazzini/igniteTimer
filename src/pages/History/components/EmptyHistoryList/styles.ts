import styled from 'styled-components'

export const NoHistoryIndicatorContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  color: ${(props) => props.theme.primaryTextColor};
  text-align: center;

  p {
    font-size: 1.5rem;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.125rem;
  }
`
