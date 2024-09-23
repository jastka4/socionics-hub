import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise })

  const profiles = await payload.find({
    collection: 'profiles',
    sort: 'name',
    depth: 1,
    limit: 12,
  })

  return (
    <div className="pt-24 pb-24">
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


      <CollectionArchive profiles={profiles.docs} />

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
    title: `Socionics Hub Profiles Page`,
  }
}
