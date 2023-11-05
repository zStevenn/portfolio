type NavContainerProps = {
  children: JSX.Element | JSX.Element[]
  className?: string;
}

function NavContainer({ children, className }: NavContainerProps) {
  let navStyling = `fixed z-50 md:m-0 left-0 right-0 bg-neutral-100 dark:bg-neutral-950 flex flex-col md:flex-row justify-between md:items-center gap-6 p-4 shadow-md dark:shadow-neutral-200/10`
  const combinedStyling = `${navStyling} ${className ? className : ""}`

  return (
    <nav className={combinedStyling}>
      {children}
    </nav>
  )
}

export default NavContainer