import type { DiscordBlock as DiscordBlockProps } from '@/payload-types'

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const discordLogoUrl =
  'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d718355f9c89eb0fd350_Logo.svg'

type DiscordMember = {
  avatar_url: string
  id: string
  username: string
}

type DiscordWidgetData = {
  instant_invite: null | string
  members: DiscordMember[]
  name: string
  presence_count: number
}

const getDiscordWidget = async (serverId: string): Promise<DiscordWidgetData | null> => {
  try {
    const response = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`, {
      next: { revalidate: 60 },
    })

    if (!response.ok) return null

    return (await response.json()) as DiscordWidgetData
  } catch {
    return null
  }
}

type DiscordCardProps = NonNullable<DiscordBlockProps['discordCards']>[number]

export const DiscordCard = async ({ description, serverId }: DiscordCardProps) => {
  const widget = await getDiscordWidget(serverId)
  const members = widget?.members?.slice(0, 5) || []
  const onlineCount = widget?.presence_count ?? members.length

  return (
    <article className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between bg-[#5865F2] px-5 py-4 text-white">
        <Image alt="Discord" height={20} src={discordLogoUrl} width={130} />
        <span className="flex items-center gap-2 text-xs font-medium text-white">
          <span className="size-2 rounded-lg bg-green-400" />
          {onlineCount} online
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{widget?.name}</h2>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            MEMBERS ONLINE
          </p>
          {members.length > 0 ? (
            <div className="mt-2 flex -space-x-2" aria-label={`${onlineCount} members online`}>
              {members.map((member) => (
                <Image
                  alt={member.username}
                  className="size-10 rounded-full border-2 border-card bg-muted object-cover"
                  height={40}
                  key={member.id}
                  loading="lazy"
                  src={member.avatar_url}
                  width={40}
                />
              ))}
              {onlineCount > members.length && (
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-semibold text-muted-foreground">
                  +{onlineCount - members.length}
                </span>
              )}
            </div>
          ) : (
            <div className="mt-2 rounded-lg border border-dashed border-border bg-muted/40 px-4 py-4 text-center text-sm text-muted-foreground">
              {widget ? 'Nobody is showing as online right now.' : 'Discord status is unavailable.'}
            </div>
          )}
        </div>

        {widget?.instant_invite && (
          <div className="mt-auto pt-5">
            <a
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#5865f2] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#4752c4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5865f2]/30"
              href={widget.instant_invite}
              rel="noopener noreferrer"
              target="_blank"
            >
              Join server <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
