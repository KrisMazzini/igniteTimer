import { createContext, ReactNode, useEffect, useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

interface ThemeContextType {
  theme: string
  switchTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const storageTheme = localStorage.getItem(
      '@ignite-timer:current-theme-1.0.0',
    )
    if (storageTheme === 'light') {
      return lightTheme
    }

    return defaultTheme
  })

  const theme = currentTheme === defaultTheme ? 'default' : 'light'

  function switchTheme() {
    if (currentTheme === defaultTheme) {
      setCurrentTheme(lightTheme)
    } else {
      setCurrentTheme(defaultTheme)
    }
  }

  useEffect(() => {
    localStorage.setItem('@ignite-timer:current-theme-1.0.0', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <StyledComponentsThemeProvider theme={currentTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}
