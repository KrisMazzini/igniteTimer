import { useContext } from 'react'
import { useSpring } from 'react-spring'

import { Moon, Sun } from 'phosphor-react'

import { ThemeSwitcherContext } from '../../App'
import { ButtonDisplay, Button, IconsContainer } from './styles'

export function ThemeSwitchButton() {
  const { theme, switchTheme } = useContext(ThemeSwitcherContext)

  const buttonStyles = useSpring({
    from: {
      left: theme === 'default' ? '0.25rem' : '1.75rem',
    },
    to: {
      left: theme === 'default' ? '1.75rem' : '0.25rem',
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
