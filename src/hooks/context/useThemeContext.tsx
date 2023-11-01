"use client"

import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect, useLayoutEffect } from "react"

export const ThemeContext = createContext<ThemeContext | null>(null)

type ThemeProviderProps = {
  children: React.ReactNode
}

type Theme = 'dark' | 'light'

type ThemeContext = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')

  useLayoutEffect(() => {
    if (typeof Window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("darkMode")
      console.log(storedTheme)
      if (storedTheme) setTheme(storedTheme as Theme)
    }
  }, [])

  useEffect(() => {
    if (typeof Window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("darkMode")
      if (storedTheme === null || storedTheme !== theme) localStorage.setItem("darkMode", theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider")
  }
  return context
}