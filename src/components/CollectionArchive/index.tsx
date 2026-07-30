import { cn } from '@/utilities/ui'
import React from 'react'

type Props<T> = {
  docs: T[]
  className: string
  renderCard: (doc: T) => React.ReactNode
}

export function CollectionArchive<T>({ docs, className, renderCard }: Props<T>) {
  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {docs?.map((doc, index) => (
            <div className={cn(className)} key={index}>
              {renderCard(doc)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
