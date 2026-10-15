import type { Post, Profile, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PostCard } from '@/components/PostCard'
import { ProfileCard } from '@/components/ProfileCard'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    categories,
    profileCategories,
    introContent,
    limit: limitFromProps,
    populateBy,
    relationTo,
    selectedDocs,
  } = props

  const limit = limitFromProps || 3

  let items: (Post | Profile)[] = []

  if (populateBy === 'collection' && relationTo) {
    const payload = await getPayload({ config: configPromise })
    let filter

    if (relationTo === 'profiles') {
      const categoryIDs = profileCategories?.map((category) =>
        typeof category === 'object' ? category.id : category,
      )

      filter = categoryIDs?.length ? { category: { in: categoryIDs } } : undefined
    } else if (relationTo === 'posts') {
      const categoryIDs = categories?.map((category) =>
        typeof category === 'object' ? category.id : category,
      )

      filter = categoryIDs?.length ? { categories: { in: categoryIDs } } : undefined
    }

    const result = await payload.find({
      collection: relationTo,
      depth: 1,
      limit,
      overrideAccess: true,
      ...(filter ? { where: filter } : {}),
    })

    items = result.docs
  } else if (populateBy === 'selection') {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((item) => {
        if (typeof item.value === 'object') return item.value
      }) as (Post | Profile)[]

      items = filteredSelectedPosts
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-3xl" data={introContent} enableGutter={false} />
        </div>
      )}
      {relationTo === 'posts' && (
        <CollectionArchive
          docs={items}
          className="col-span-4"
          renderCard={(item) => (
            <PostCard className="h-full" doc={item as Post} relationTo="posts" showCategories />
          )}
        />
      )}
      {relationTo === 'profiles' && (
        <CollectionArchive
          docs={items}
          className="col-span-2"
          renderCard={(item) => (
            <ProfileCard className="h-full" doc={item as Profile} relationTo="profiles" />
          )}
        />
      )}
    </div>
  )
}
