import React from 'react'
import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'
import avatar from '../assets/avatar.png'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Header() {
  const [theme, setTheme] = React.useState(() => document.body.getAttribute('data-theme') ?? 'dark')
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  const handleSwitchTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }
  const isDark = theme === 'dark';
  const headerStyles = {
    fontSize: '36px', 
    whiteSpace: 'nowrap', 
  };
  const subTextStyle = {
    fontSize: '16px', 
  };

  return (
    <div className="Header container">
      <h2 style={headerStyles}>
        <b>Hevesi Tamás</b>
        <div style={subTextStyle}>Froxy555</div>
        <button className="switch-theme-button modeAdjust" onClick={handleSwitchTheme}>
          {isDark ? <SunIcon color="white" /> : <MoonIcon />}
        </button>
      </h2>
      <div className="ten columns Header__inner">
        <img src={avatar} alt="avatar" className="avatar" />
        &nbsp;&nbsp;&nbsp;
      </div>
      
    </div>
  )
}

export default Header
