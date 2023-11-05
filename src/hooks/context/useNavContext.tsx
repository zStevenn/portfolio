"use client"

import { Nav, NavContextProps, NavProviderProps } from "@/types/Nav"
import { createContext, useContext, useState } from "react"

export const NavContext = createContext<NavContextProps | null>(null)

export default function NavContextProvider({ children }: NavProviderProps) {
  const [nav, setNav] = useState<Nav>('closed')
  const isOpen = nav === 'open'

  function closeNav() {
    setNav("closed")
  }

  return (
    <NavContext.Provider
      value={{ isOpen, nav, setNav, closeNav }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNavContext() {
  const context = useContext(NavContext)
  if (!context) {
    throw new Error("useNavContext must be used within a ThemeProvider")
  }
  return context
}