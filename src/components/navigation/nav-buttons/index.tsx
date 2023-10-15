"use client"

import { useNavContext } from '@/hooks/context/useNavContext'

function NavButtons() {
  const { isOpen } = useNavContext()
  return (
    <div className={`${isOpen ? "" : "hidden md:block"}`}>
      <button className='border px-2 py-1'>Contact</button>
      <button className='border px-2 py-1 md:ml-4'>Download CV</button>
    </div>
  )
}

export default NavButtons