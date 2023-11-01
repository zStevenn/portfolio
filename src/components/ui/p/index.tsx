import React, { MutableRefObject } from 'react'

type PProps = {
  children: string
  ref?: MutableRefObject<HTMLParagraphElement>
}

function P({ children, ref }: PProps) {
  return (
    <p
      className='text-base md:text-lg lg:text-xl transition-all'
      ref={ref}
    >
      {children}
    </p>
  )
}

export default P