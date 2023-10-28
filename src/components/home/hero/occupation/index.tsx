"use client"

import { shantell_sans } from "@/fonts"
import delay from "@/helpers/delay"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"

function Occupation() {
  const occupationRef = useRef<HTMLParagraphElement>(null)

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
        translateX: "-3vh",
        ease: "power.out",
        duration: 1,
      })
      gsap.to(occupationRef.current, {
        opacity: 0,
        duration: 0.5
      })
      gsap.to(occupationRef.current, {
        translateX: 0,
        duration: 1,
        ease: "back.out",
        delay: 1
      })
      gsap.to(occupationRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 1
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
      animation.revert()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <p
      ref={occupationRef}
      className={`text-red-500/90 text-lg md:text-xl ${shantell_sans.className}`}
    >
      {activeJob}
    </p>
  )
}

export default Occupation