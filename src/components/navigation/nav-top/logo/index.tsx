"use client"

import { shantell_sans } from "@/fonts"
import { useNavContext } from "@/hooks/context/useNavContext"

function Logo() {
  const { isOpen } = useNavContext()
  return (
    <h1 className={`w-24 md:block ${shantell_sans.className} text-base md:text-lg lg:text-xl transition-all ${isOpen ? "" : "hidden"}`}>Steven Li</h1>
  )
}

export default Logo