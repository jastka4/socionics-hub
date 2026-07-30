import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { ProfileCard } from '@/components/ProfileCard'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const profiles = await payload.find({
    collection: 'profiles',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: 'name',
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Profiles</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="profiles"
          currentPage={profiles.page}
          limit={12}
          totalDocs={profiles.totalDocs}
        />
      </div>

      <CollectionArchive
        docs={profiles.docs}
        className="col-span-2"
        renderCard={(profile) => (
          <ProfileCard className="h-full" doc={profile} relationTo="profiles" />
        )}
      />

      <div className="container">
        {profiles.totalPages > 1 && profiles.page && (
          <Pagination collection="profiles" page={profiles.page} totalPages={profiles.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Socionics Hub Profiles`,
  }
}
