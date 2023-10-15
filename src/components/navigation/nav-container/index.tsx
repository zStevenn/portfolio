"use client"

import { useNavContext } from '@/hooks/context/useNavContext';

type NavContainerProps = {
  children: JSX.Element | JSX.Element[]
  className?: string;
}

function NavContainer({ children, className }: NavContainerProps) {
  const { isOpen } = useNavContext()

  let navStyling = `fixed z-50 ml-4 mr-4 mt-4 md:m-0 md:border-0 md:right-0 md:left-0 rounded-md md:rounded-none bg-neutral-100 dark:bg-neutral-950 flex flex-col md:flex-row justify-between md:items-center gap-6 p-2 md:p-4 md:shadow-xl shadow-2xl`
  const openStyling = isOpen ? `left-0 right-0` : `border`
  const combinedStyling = `${navStyling} ${openStyling} ${className ? className : ""}`

  return (
    <nav className={combinedStyling}>
      {children}
    </nav>
  )
}

export default NavContainer