'use client'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Profile } from 'src/payload-types'

import { Media } from '@/components/Media'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'

export const CardProfile: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Profile
  relationTo?: 'profiles'
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo } = props

  const { id, name, category, profilePicture, SHS, SCS } = doc || {}
  const { type: shsType, subtype, accentuation, shift } = SHS || {}
  const { type: scsType } = SCS || {}

  const href = `/${relationTo}/${id}`

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div>
        {!profilePicture && <div className="text-center">No image</div>}
        {profilePicture && typeof profilePicture !== 'string' && <Media size="360px" resource={profilePicture} className="rounded-lg" />}
      </div>
      <div className="p-4">
        <div className="prose">
          <h3><a className="not-prose" href={href} ref={link.ref}>{name}</a></h3>
        </div>
        <div className="uppercase text-muted-foreground text-xs mb-4">
          {typeof category == 'object' && <p>{category?.title}</p>}
        </div>
        <div>
          {shsType &&
            <div className="flex mt-2 items-center uppercase rounded-lg w-fit bg-category-shs text-category">
              <div className="text-xs font-semibold px-1 border-r border-r-category">SHS</div>
              <div className="rounded-lg text-sm px-1">
                {shsType}
                {subtype?.length != 0 && `-${subtype?.join('')}`}
                {accentuation?.length != 0 && '-' + accentuation?.join('')}
              </div>
            </div>
          }
          {scsType &&
            <div className="flex mt-2 items-center uppercase rounded-lg w-fit bg-category-scs text-category">
              <div className="text-xs font-semibold px-1 border-r border-r-category">SCS</div>
              <div className="rounded-lg text-sm px-1">{scsType}</div>
            </div>
          }
        </div>
      </div>
    </article>
  )
}
