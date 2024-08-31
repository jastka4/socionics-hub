import { cn } from '@/utilities/cn'
import React from 'react'

import type { Post, Profile } from '../../../payload-types'

import { CardPost } from '../Card/Post'
import { CardProfile } from '../Card/Profile'

export type Props = {
  posts?: Post[],
  profiles?: Profile[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts, profiles } = props

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <CardPost className="h-full" doc={result} relationTo="posts" showCategories />
                </div>
              )
            }

            return null
          })}
          {profiles?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-2" key={index}>
                  <CardProfile className="h-full" doc={result} relationTo="profiles" />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
