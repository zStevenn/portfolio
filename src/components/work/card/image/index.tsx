import Image from 'next/image';
import React from 'react'

type WorkCardImageProps = {
  alt: string;
  src: string;
}

function WorkCardImage({ alt, src }: WorkCardImageProps) {
  if (!!src) {
    return (
      <Image
        className='w-full'
        src={src}
        alt={alt}
        width={500}
        height={500}
        draggable={false}
      />
    )
  }

  return <></>
}

export default WorkCardImage