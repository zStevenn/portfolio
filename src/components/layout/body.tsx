import { Outfit } from 'next/font/google'
import React from 'react'

const outfit = Outfit({ subsets: ['latin'] })

type BodyProps = {
  children: React.ReactNode
}

function Body({ children }: BodyProps) {
  return (
    <body className={`${outfit.className} bg-neutral-100 text-neutral-900 dark:text-neutral-100 dark:bg-neutral-950`}>
      {children}
    </body>
  )
}

export default Body