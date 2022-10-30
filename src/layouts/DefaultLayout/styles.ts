import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);

  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.primaryBackground};

  @media (max-width: 768px) {
    height: 100vh;
    margin: 0;
  }

  @media (max-height: 700px) {
    margin: 0 auto;
    height: 100vh;
  }
`
