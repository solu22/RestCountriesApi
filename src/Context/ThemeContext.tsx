import React from 'react'
import { createContext } from 'react'

const themes = {
    light: "light",
    dark: "dark",
}

type ContextType = {
    currentTheme: string,
    switchTheme: React.Dispatch<React.SetStateAction<string>>
}

export const context: ContextType={
    currentTheme: themes.light,
    switchTheme: () => {}
}

export const ThemeContext = createContext(context)