import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { typesSelectField } from '../fields/types'
import { slugField } from '../fields/slug'

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
            typesSelectField(),
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
            typesSelectField({
              overrides: {
                name: 'shift',
                label: 'activity orientation shift',
                validate: (val: any, { siblingData }) => {
                  if (val && val === siblingData.type) {
                    return 'Type and accentuation cannot be the same'
                  }
                  return true
                },
              },
            }),
          ],
        },
        {
          name: 'SCS',
          description: 'Configure SCS type.',
          fields: [typesSelectField()],
        },
      ],
    },
    slugField('name', { admin: { readOnly: true } }),
  ],
}
