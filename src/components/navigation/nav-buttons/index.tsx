"use client"

import Button from '@/components/ui/button'
import { useNavContext } from '@/hooks/context/useNavContext'

function NavButtons() {
  const { isOpen } = useNavContext()
  return (
    <div className={`${isOpen ? "" : "hidden md:flex gap-4"}`}>
      <Button>Contact</Button>
      <Button>Download</Button>
    </div>
  )
}

export default NavButtons