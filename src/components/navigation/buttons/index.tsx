import Button from '@/components/ui/button'
import React from 'react'
import DarkModeButton from '../dark-mode-button'

type ButtonsProps = {
  className: string
}

function Buttons({ className }: ButtonsProps) {
  return (
    <div className={className}>
      <Button>Contact</Button>
      <Button>Download</Button>
      <DarkModeButton />
    </div>
  )
}

export default Buttons