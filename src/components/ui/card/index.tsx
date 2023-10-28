import Image from 'next/image'
import React from 'react'

type CardProps = {
  title: string
  description?: string
  date: string
  imageSrc?: string
  tags?: string[];
}

function Card({ title, description, date, imageSrc, tags }: CardProps) {
  const hasImage = !!imageSrc
  const hasTags = !!tags
  const hasDate = !!date
  const hasDescription = !!description

  return (
    <div className="rounded overflow-hidden shadow-md dark:bg-neutral-800 dark:shadow-neutral-800/90">
      {hasImage &&
        <Image
          className='w-full'
          src={imageSrc}
          alt={`${title} Image`}
          width={500}
          height={500}
          draggable={false}
        />
      }
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{title}</div>
        {hasDate && <div className="text-neutral-800 dark:text-neutral-400 text-base mb-2">{date}</div>}
        {hasDescription && <p className="text-neutral-700 dark:text-neutral-300 text-base">{description}</p>}
      </div>
      {hasTags &&
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      }
    </div>
  )
}

export default Card