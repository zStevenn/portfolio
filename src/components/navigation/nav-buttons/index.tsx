"use client"

import { useNavContext } from '@/hooks/context/useNavContext'

function NavButtons() {
  const { isOpen } = useNavContext()
  return (
    <div className={`flex gap-4  ${isOpen ? "" : "hidden sm:block"}`}>
      <button className='border px-2 py-4'>Contact</button>
      <button className='border px-2 py-4'>Download CV</button>
    </div>
  )
}

export default NavButtons