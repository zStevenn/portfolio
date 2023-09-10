"use client"

import { useNavContext } from '@/hooks/context/useNavContext'
import useIsFirstRender from '@/hooks/useIsFirstRender'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useRef } from 'react'
import animations from './animations'

function ToggleNav() {
  const svgOpenRef = useRef<SVGSVGElement | null>(null)
  const svgClosedRef = useRef<SVGSVGElement | null>(null)
  const isFirstRender = useIsFirstRender()
  const { nav, setNav } = useNavContext()

  useEffect(() => {
    if (!isFirstRender) {
      if (nav === 'open') {
        animations.open(svgOpenRef, svgClosedRef)
      } else {
        animations.close(svgOpenRef, svgClosedRef)
      }
    }

    return () => { animations.kill() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nav])

  function toggleNav() {
    setNav(nav === 'open' ? 'closed' : 'open')
  }

  return (
    <button
      onClick={toggleNav}
      className='relative p-1 h-6 w-6'
      title='Toggle navigation'
    >
      <Bars3Icon
        ref={svgClosedRef}
        className="h-6 w-6 absolute inset-0"
      />
      <XMarkIcon
        ref={svgOpenRef}
        className="h-6 w-6 absolute inset-0 scale-0"
      />
    </button>
  )
}

export default ToggleNav