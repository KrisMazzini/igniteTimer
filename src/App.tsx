import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { lightTheme } from './styles/themes/light'

interface ThemeSwitcherContextType {
  theme: string
  switchTheme: () => void
}

export const ThemeSwitcherContext = createContext(
  {} as ThemeSwitcherContextType,
)

export function App() {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)
  const theme = currentTheme === defaultTheme ? 'default' : 'light'

  function switchTheme() {
    if (currentTheme === defaultTheme) {
      setCurrentTheme(lightTheme)
    } else {
      setCurrentTheme(defaultTheme)
    }
  }

  return (
    <ThemeSwitcherContext.Provider value={{ theme, switchTheme }}>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  )
}
