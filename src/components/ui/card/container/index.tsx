import React from 'react'

type CardContainerProps = {
  children: JSX.Element | JSX.Element[] | string
}

function CardContainer({ children }: CardContainerProps) {
  return (
    <div
      className='rounded overflow-hidden shadow-md dark:bg-neutral-800 dark:shadow-neutral-800/90'
    >
      {children}
    </div>
  )
}

export default CardContainer