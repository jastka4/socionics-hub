import React from 'react'

import type { DiscordBlock as DiscordBlockProps } from '@/payload-types'
import { CollectionArchive } from '@/components/CollectionArchive'
import RichText from '@/components/RichText'

import { DiscordCard } from './DiscordCard'

export const DiscordBlock: React.FC<DiscordBlockProps> = (props) => {
  const { discordCards, id, introContent } = props

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      {discordCards?.length > 0 && (
        <CollectionArchive
          docs={discordCards}
          className="col-span-4"
          renderCard={(discordCard) => <DiscordCard {...discordCard} />}
        />
      )}
    </div>
  )
}
