import { useContext } from 'react'
import { useSpring } from 'react-spring'

import { Moon, Sun } from 'phosphor-react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { ButtonDisplay, Button, IconsContainer } from './styles'

export function ThemeSwitchButton() {
  const { theme, switchTheme } = useContext(ThemeContext)

  const buttonStyles = useSpring({
    from: {
      left: theme === 'default' ? '4px' : '28px',
    },
    to: {
      left: theme === 'default' ? '28px' : '4px',
    },
  })

  return (
    <Button onClick={switchTheme}>
      <IconsContainer>
        <Moon size={16} />
        <Sun size={16} />
      </IconsContainer>
      <ButtonDisplay style={buttonStyles} />
    </Button>
  )
}
