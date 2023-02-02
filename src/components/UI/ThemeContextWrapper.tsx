import React, { FC, useEffect, useState } from 'react'
import ThemeContext from '../../context/ThemeContext';

const ThemeContextWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    const initState = typeof window !== "undefined" ? localStorage.getItem('theme'):null
    const [theme, setTheme] = useState(initState)
    const toggleTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    useEffect(() => {
        if (theme === 'light') document.body.classList.remove('dark')
        else document.body.classList.add('dark')
    }, [theme])
    return (
        <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextWrapper