"use client"

import SectionEnum from "@/enums/Section";
import { useNavContext } from "@/hooks/context/useNavContext";
import Link from "next/link";
import { MouseEvent } from "react";

type NavLinkProps = {
  name: string;
  id: SectionEnum;
}

function NavLink({ name, id }: NavLinkProps) {
  const { isOpen, closeNav } = useNavContext()

  const sectionId = `#${id}`

  function smoothScrollToSection() {
    const section = document.getElementById(id)

    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop - 50
      })
    }
  }

  function handleLinkClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    smoothScrollToSection()
    if (isOpen) closeNav()
  }

  return (
    <Link
      className="transition-all hover:text-red-500 active:scale-95 hover:cursor-pointer p-1"
      href={sectionId}
      onClick={handleLinkClick}
    >
      {name}
    </Link>
  )
}

export default NavLink