"use client"

import { useNavContext } from '@/hooks/context/useNavContext'
import React from 'react'

function NavLinks() {
  const { isOpen } = useNavContext()
  return (
    <ul className={`flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 ${isOpen ? "" : "hidden sm:block"}`}>
      <li>test1</li>
      <li>test1</li>
      <li>test1</li>
      <li>test1</li>
      <li>test1</li>
    </ul>
  )
}

export default NavLinks