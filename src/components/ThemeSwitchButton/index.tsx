import { useContext } from 'react'

import { ThemeSwitcherContext } from '../../App'
import { ButtonDisplay, Button } from './styles'

export function ThemeSwitchButton() {
  const { theme, switchTheme } = useContext(ThemeSwitcherContext)

  const buttonHorizontalAlignment = theme === 'default' ? 'left' : 'right'

  return (
    <Button onClick={switchTheme}>
      <ButtonDisplay horizontalAlignment={buttonHorizontalAlignment} />
    </Button>
  )
}
