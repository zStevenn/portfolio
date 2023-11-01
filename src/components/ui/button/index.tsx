
type ButtonProps = {
  onClick?: () => void
  className?: string;
  children: string;
}

function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button
      className={`rounded hover:scale-95 transition-all border border-neutral-950 hover:bg-red-700/70 hover:border-red-700 hover:shadow hover:shadow-red-700 hover:text-neutral-200 px-2 py-1 dark:border-neutral-700 dark:hover:border-red-700 ${className ? className : null}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button