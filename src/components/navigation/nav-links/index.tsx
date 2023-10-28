"use client"

import { useNavContext } from '@/hooks/context/useNavContext'
import useViewportWidth from '@/hooks/useViewportWidth'
import { useLayoutEffect, useState } from 'react'
import NavLink from './nav-link'
import SectionEnum from '@/enums/Section'

function NavLinks() {
  const { isOpen } = useNavContext()
  const viewportWidth = useViewportWidth()

  const [navStyling, setNavStyling] = useState<string>()

  const navLinks = [
    { name: 'Home', id: SectionEnum.Introduction },
    { name: 'Werk', id: SectionEnum.Work },
    { name: 'Studie', id: SectionEnum.Study },
    { name: 'Contact', id: SectionEnum.Contact },
  ];

  useLayoutEffect(() => {
    const isMobile = viewportWidth < 768
    setNavStyling(isMobile ? (isOpen ? "" : "hidden md:block") : "flex gap-4")
  }, [isOpen, viewportWidth])

  return (
    <ul className={navStyling}>
      {navLinks.map((navLink) => (
        <NavLink key={navLink.id} name={navLink.name} id={navLink.id} />
      ))}
    </ul>
  )
}

export default NavLinks