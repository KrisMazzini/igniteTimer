import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { ThemeProvider } from './contexts/ThemeContext'
import { CyclesContextProvider } from './contexts/CyclesContext'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
