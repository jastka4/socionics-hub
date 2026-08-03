import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const DiscordBlock: Block = {
  slug: 'discord',
  interfaceName: 'DiscordBlock',
  labels: {
    plural: 'Discord Blocks',
    singular: 'Discord Block',
  },
  fields: [
    {
      name: 'introContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      label: 'Intro Content',
    },
    {
      name: 'discordCards',
      type: 'array',
      required: true,
      labels: {
        plural: 'Discord Server Cards',
        singular: 'Discord Server Card',
      },
      fields: [
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'serverId',
          label: 'Discord Server ID',
          type: 'text',
          required: true,
          admin: {
            description: 'Server widget has to be enabled in the Discord Server Settings.',
          },
          validate: (value: null | string | undefined) =>
            /^\d{17,20}$/.test(value || '') || 'Enter a valid Discord server ID.',
        },
      ],
    },
  ],
}
