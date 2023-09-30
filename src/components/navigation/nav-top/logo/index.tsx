"use client"

import { useNavContext } from "@/hooks/context/useNavContext"

function Logo() {
  const { isOpen } = useNavContext()
  return (
    <h1 className={`w-24 sm:block ${isOpen ? "" : "hidden"}`}>Steven Li</h1>
  )
}

export default Logo