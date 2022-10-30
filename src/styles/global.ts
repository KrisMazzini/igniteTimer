import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme.rootBackground};
        color: ${(props) => props.theme.secondaryTextColor};

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        html {
            font-size: 90%;
        }
    }

    @media (max-width: 533px) {
        html {
            font-size: 80%;
        }
    }
    
`
