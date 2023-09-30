"use client"

import { useNavContext } from '@/hooks/context/useNavContext';

type NavContainerProps = {
  children: JSX.Element | JSX.Element[]
  className?: string;
}

function NavContainer({ children, className }: NavContainerProps) {
  const { isOpen } = useNavContext()

  let navStyling = `fixed z-50 ml-4 mr-4 mt-4 border sm:border-0 sm:right-0 sm:left-0 rounded-md bg-neutral-100 dark:bg-neutral-950 flex flex-col sm:flex-row justify-between gap-6 p-2 sm:p-4`
  const openStyling = isOpen ? `left-0 right-0` : ``
  const combinedStyling = `${navStyling} ${openStyling} ${className ? className : ""}`

  return (
    <nav className={combinedStyling}>
      {children}
    </nav>
  )
}

export default NavContainer