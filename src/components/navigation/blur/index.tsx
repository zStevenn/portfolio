"use client"

import { useNavContext } from '@/hooks/context/useNavContext'
import React, { useLayoutEffect, useRef } from 'react'
import animations from './animations'
import useIsFirstRender from '@/hooks/useIsFirstRender'

function Blur() {
  const blurRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useIsFirstRender()
  const { nav } = useNavContext()

  const isOpen = nav === 'open'

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
  }, [nav])

  return (
    <div
      ref={blurRef}
      className={`absolute inset-0 bg-neutral-700 ${isOpen ? 'z-40' : '-z-40'}`}
    />
  )
}

export default Blur