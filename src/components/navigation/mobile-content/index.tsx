"use client"

import { useNavContext } from '@/hooks/context/useNavContext'
import React, { useLayoutEffect, useRef } from 'react'
import Links from '../links'
import Buttons from '../buttons'
import gsap from 'gsap'

function MobileContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isOpen } = useNavContext()

  useLayoutEffect(() => {
    let ctx = gsap.context((self) => {
      self.add("open", () => {
        gsap.fromTo(containerRef.current, {
          translateX: -100,
          opacity: 0
        }, {
          translateX: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power1.inOut"
        })
      })
    })

    if (isOpen) {
      ctx.open()
    }

    return () => {
      ctx.revert()
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div ref={containerRef}>
          <Links className='md:hidden pb-8 pt-4' />
          <Buttons className='md:hidden flex flex-col-reverse gap-4' />
        </div>
      )}
    </>
  )
}

export default MobileContent