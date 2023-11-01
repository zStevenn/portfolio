import React from 'react'

type CardContainerProps = {
  children: JSX.Element | JSX.Element[] | string
  className?: string;
}

function CardContainer({ children, className }: CardContainerProps) {
  return (
    <div
      className={`rounded overflow-hidden shadow-md dark:bg-neutral-800 dark:shadow-neutral-800/90 ${className ? className : null}`}
    >
      {children}
    </div>
  )
}

export default CardContainer