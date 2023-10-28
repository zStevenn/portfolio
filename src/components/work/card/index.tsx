import CardContainer from '@/components/ui/card/container'
import React from 'react'
import WorkCardImage from './image'
import WorkCardTags from './tags'

type CardProps = {
  title: string
  description: string
  date: string
  imageSrc: string
  tags?: string[]
}

function WorkCard({ title, description, date, imageSrc, tags }: CardProps) {
  const hasDate = !!date
  const hasDescription = !!description

  return (
    <CardContainer>
      <WorkCardImage src={imageSrc} alt={`${title} Image`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{title}</div>
        {hasDate && <div className="text-neutral-800 dark:text-neutral-400 text-base mb-2">{date}</div>}
        {hasDescription && <p className="text-neutral-700 dark:text-neutral-300 text-base">{description}</p>}
      </div>
      <WorkCardTags tags={tags} />
    </CardContainer>
  )
}

export default WorkCard