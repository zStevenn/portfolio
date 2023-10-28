"use client"

import { shantell_sans } from "@/fonts"
import delay from "@/helpers/delay"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"

function Occupation() {
  const occupationRef = useRef<HTMLSpanElement>(null)

  const arr = [
    'Software Engineer',
    'React Developer',
    'Front-End Developer'
  ]

  const [activeJobIndex, setActiveJobIndex] = useState<number>(0)
  const activeJob = arr[activeJobIndex]

  const animation = gsap.context((self) => {
    self.add("play", () => {
      gsap.to(occupationRef.current, {
        translateY: '3vh',
        duration: 1
      })
      gsap.to(occupationRef.current, {
        opacity: 0,
        duration: 0.3
      })
      gsap.to(occupationRef.current, {
        translateY: 0,
        duration: 1,
        delay: 1,
      })
      gsap.to(occupationRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 1.5
      })
    })
  })

  useEffect(() => {
    const timer = 5000

    const interval = setInterval(async () => {
      animation.play()
      await delay(1000)
      setActiveJobIndex((prevIndex) => (prevIndex + 1) % arr.length)
    }, timer)

    return () => {
      clearInterval(interval)
      animation.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <p className={`text-lg md:text-xl inline pr-2 ${shantell_sans.className}`}>
        Ik ben een
      </p>
      <div className={`text-lg md:text-xl inline ${shantell_sans.className}`}>
        <span
          ref={occupationRef}
          className='text-red-500/90 absolute'
        >
          {activeJob}
        </span>
      </div>
    </div>
  )
}

export default Occupation