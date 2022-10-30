import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.primaryTextColor};

  p {
    display: none;
  }

  div {
    display: flex;
    gap: inherit;
  }

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme.secondaryBackground};
  }

  @media (max-width: 650px) {
    font-size: 9rem;
    line-height: 7.2rem;

    gap: 0.9rem;

    span {
      padding: 1.8rem 0.9rem;
    }
  }

  @media (max-width: 591px) {
    font-size: 8rem;
    line-height: 6.4rem;

    gap: 0.8rem;

    span {
      padding: 1.6rem 0.8rem;
    }
  }

  @media (max-width: 476px) {
    flex-direction: column;
    gap: 0;

    font-size: 10rem;
    line-height: 8rem;

    p {
      display: initial;
      margin-bottom: 10px;

      font-size: 1.25rem;
      line-height: 1;
      text-align: center;
    }

    div {
      gap: 1rem;
    }

    div:first-of-type {
      margin-bottom: 20px;
    }
  }
`

export const Separator = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;

  padding: 2rem 0;

  overflow: hidden;

  color: ${(props) => props.theme['green-500']};

  @media (max-width: 650px) {
    width: 3.6rem;
    padding: 1.8rem 0;
  }

  @media (max-width: 591px) {
    width: 3.2rem;
    padding: 1.6rem 0;
  }

  @media (max-width: 476px) {
    padding: 0;
    line-height: 0;
  }
`
