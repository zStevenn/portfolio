"use client"

import { useThemeContext } from '@/hooks/context/useThemeContext'
import React from 'react'

type HTMLProps = {
  children: React.ReactNode
}

function HTML({ children }: HTMLProps) {
  const { theme } = useThemeContext()

  return (
    <html lang="nl" className={theme}>
      {children}
    </html>
  )
}

export default HTML