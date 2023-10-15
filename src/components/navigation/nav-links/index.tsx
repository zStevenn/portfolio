"use client"

import { useNavContext } from '@/hooks/context/useNavContext'
import useViewportWidth from '@/hooks/useViewportWidth'
import { useLayoutEffect, useState } from 'react'

function NavLinks() {
  const { isOpen } = useNavContext()
  const viewportWidth = useViewportWidth()

  const [navStyling, setNavStyling] = useState<string>()

  const navLinks = [
    'Home',
    'Studie',
    'Ervaring',
    'Contact'
  ]

  useLayoutEffect(() => {
    const isMobile = viewportWidth < 768
    setNavStyling(isMobile ? (isOpen ? "" : "hidden md:block") : "flex gap-4")
  }, [isOpen, viewportWidth])

  return (
    <ul className={navStyling}>
      {navLinks.map((navLink) => (
        <li key={navLink}>{navLink}</li>
      ))}
    </ul>
  )
}

export default NavLinks