import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import { Media } from '@/components/Media'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import React, { cache } from 'react'
import PageClient from './page.client'
import type { Profile } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const profiles = await payload.find({
    collection: 'profiles',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = profiles.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Profile({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/profiles/' + decodedSlug
  const profile = await queryPostBySlug({ slug: decodedSlug })

  if (!profile) return <PayloadRedirects url={url} />

  return (
    <article className="container pt-24 pb-24">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {profile.profilePicture ? (
            <Media resource={profile.profilePicture} size="33vw" />
          ) : (
            <div className="p-8 text-muted-foreground">No profile image</div>
          )}
        </div>

        <div>
          {profile.category && typeof profile.category === 'object' && (
            <p className="mb-2 text-sm uppercase text-muted-foreground">{profile.category.title}</p>
          )}
          <h1 className="mb-8 text-4xl font-bold">{profile.name}</h1>

          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-5">
              <dt className="mb-3 text-xl font-semibold">SHS</dt>
              <dd className="space-y-2">
                <p>
                  <span className="text-muted-foreground">Type:</span>{' '}
                  {profile.SHS?.type || 'Not specified'}
                </p>
                {profile.SHS?.subtype?.length ? (
                  <p>
                    <span className="text-muted-foreground">Subtype:</span>{' '}
                    {profile.SHS?.subtype.join(', ')}
                  </p>
                ) : null}
                {profile.SHS?.accentuation?.length ? (
                  <p>
                    <span className="text-muted-foreground">Accentuation:</span>{' '}
                    {profile.SHS?.accentuation.join(', ')}
                  </p>
                ) : null}
                {profile.SHS?.shift ? (
                  <p>
                    <span className="text-muted-foreground">Shift:</span> {profile.SHS?.shift}
                  </p>
                ) : null}
              </dd>
            </div>

            <div className="rounded-lg border border-border p-5">
              <dt className="mb-3 text-xl font-semibold">SCS</dt>
              <dd className="space-y-2">
                <p>
                  <span className="text-muted-foreground">Type:</span>{' '}
                  {profile.SCS?.type || 'Not specified'}
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'profiles',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
