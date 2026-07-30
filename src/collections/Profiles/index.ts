import type { CollectionConfig, SelectFieldValidation } from 'payload'

import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'
import { socionicsTypes } from '@/fields/socionicsTypes'
import { slugField } from 'payload'

export const Profiles: CollectionConfig = {
  slug: 'profiles',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Typings',
    defaultColumns: ['name', 'category', 'SHS', 'SCS'],
  },
  defaultSort: 'name',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'profile-categories',
      required: true,
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'SHS',
          description: 'Configure SHS type.',
          fields: [
            socionicsTypes(),
            {
              name: 'subtype',
              type: 'select',
              hasMany: true,
              admin: {
                isSortable: true,
              },
              options: [
                {
                  label: 'D',
                  value: 'D',
                },
                {
                  label: 'C',
                  value: 'C',
                },
                {
                  label: 'N',
                  value: 'N',
                },
                {
                  label: 'H',
                  value: 'H',
                },
              ],
            },
            {
              name: 'accentuation',
              type: 'select',
              hasMany: true,
              options: [
                {
                  label: 'F',
                  value: 'F',
                },
                {
                  label: 'S',
                  value: 'S',
                },
                {
                  label: 'P',
                  value: 'P',
                },
                {
                  label: 'L',
                  value: 'L',
                },
                {
                  label: 'E',
                  value: 'E',
                },

                {
                  label: 'R',
                  value: 'R',
                },

                {
                  label: 'I',
                  value: 'I',
                },

                {
                  label: 'T',
                  value: 'T',
                },
              ],
            },
            socionicsTypes({
              overrides: {
                name: 'shift',
                label: 'activity orientation shift',
                validate: ((value, { siblingData }) => {
                  const { type } = siblingData as { type?: string }

                  if (value && value === type) {
                    return 'Type and activity orientation shift cannot be the same'
                  }

                  return true
                }) satisfies SelectFieldValidation,
              },
            }),
          ],
        },
        {
          name: 'SCS',
          description: 'Configure SCS type.',
          fields: [socionicsTypes()],
        },
      ],
    },
    slugField({ useAsSlug: 'name' }),
  ],
}
