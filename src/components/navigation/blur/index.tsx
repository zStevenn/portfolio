"use client"

import { useNavContext } from '@/hooks/context/useNavContext'
import useIsFirstRender from '@/hooks/useIsFirstRender'
import { useLayoutEffect, useRef } from 'react'
import animations from './animations'

function Blur() {
  const blurRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useIsFirstRender()
  const { isOpen, setNav } = useNavContext()

  useLayoutEffect(() => {
    if (!isFirstRender) {
      if (isOpen) {
        animations.open(blurRef)
      } else {
        animations.close(blurRef)
      }
    }

    return () => { animations.kill() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <div
      ref={blurRef}
      onClick={() => setNav("closed")}
      className={`absolute inset-0 bg-neutral-700 opacity-0 ${isOpen ? 'z-40' : '-z-40'}`}
    />
  )
}

export default Blur