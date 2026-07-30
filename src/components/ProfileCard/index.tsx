'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'

import type { Profile } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardProfileData = Pick<
  Profile,
  'slug' | 'category' | 'name' | 'profilePicture' | 'SHS' | 'SCS'
>

export const ProfileCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardProfileData
  relationTo?: 'profiles'
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo } = props

  const { slug, name, category, profilePicture, SHS, SCS } = doc || {}
  const { type: shsType, subtype, accentuation, shift } = SHS || {}
  const { type: scsType } = SCS || {}

  const href = `/${relationTo}/${slug}`

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
        {profilePicture && typeof profilePicture !== 'string' && (
          <Media size="360px" resource={profilePicture} className="rounded-lg" />
        )}
      </div>
      <div className="p-4">
        <div className="prose">
          <h3>
            <a className="not-prose" href={href} ref={link.ref}>
              {name}
            </a>
          </h3>
        </div>
        <div className="uppercase text-muted-foreground text-xs mb-4">
          {typeof category == 'object' && <p>{category?.title}</p>}
        </div>
        <div>
          {shsType && (
            <div className="flex mt-2 items-center uppercase rounded-sm w-fit bg-type-shs text-type-foreground">
              <div className="text-xs font-semibold px-1 border-r border-r-type-foreground">
                SHS
              </div>
              <div className="text-sm px-1">
                {shsType}
                {subtype?.length != 0 && `-${subtype?.join('')}`}
                {accentuation?.length != 0 && '-' + accentuation?.join('')}
              </div>
            </div>
          )}
          {scsType && (
            <div className="flex mt-2 items-center uppercase rounded-sm w-fit bg-type-scs text-type-foreground">
              <div className="text-xs font-semibold px-1 border-r border-r-type-foreground">
                SCS
              </div>
              <div className="text-sm px-1">{scsType}</div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
