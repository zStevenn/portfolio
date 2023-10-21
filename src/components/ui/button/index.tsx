
type ButtonProps = {
  onClick?: () => void
  className?: string;
  children: string;
}

function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button
      className='border px-2 py-1'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button