import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import { ThemeSwitchButton } from '../ThemeSwitchButton'

import igniteLogo from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />
      <ThemeSwitchButton />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
