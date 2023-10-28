import React from 'react'

type WorkCardTagsProps = {
  tags?: string[]
}

function WorkCardTags({ tags }: WorkCardTagsProps) {
  if (!!tags) {
    return (
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${tag}`}</span>
        ))}
      </div>
    )
  }

  return <></>
}

export default WorkCardTags