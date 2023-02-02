import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
type Props = {
  size: string | number
}
const ThemeSwitch = ({ size }: Props) => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext)
  return (
    <button onClick={() => toggleTheme(currentTheme === "light" ? 'dark' : 'light')}>
      {currentTheme === 'light' ? <FaMoon size={size} /> : <FaSun size={size} />}
    </button>
  )
}

export default ThemeSwitch