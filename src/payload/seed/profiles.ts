import type { Profile } from '../../payload-types'

export const profiles: Array<Partial<Profile>> = [
  {
    slug: 'albert-einstein',
    name: 'Albert Einstein',
    category: '{{CATEGORY_REAL}}',
    SHS: {
      type: 'ILI',
      subtype: ['C'],
      accentuation: [],
    },
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'albert-schweitzer',
    name: 'Albert Schweitzer',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'andrew-tate',
    name: 'Andrew Tate',
    category: '{{CATEGORY_REAL}}',
    SHS: {
      type: 'LSI',
      subtype: ['C', 'D', 'N', 'H'],
      accentuation: ['F'],
    },
    SCS: {
      type: 'IEE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'authors-crush',
    name: "Author's Crush",
    category: '{{CATEGORY_REAL}}',
    SHS: {
      type: 'EIE',
      subtype: ['H', 'D', 'N', 'C'],
      accentuation: [],
    },
    SCS: {},
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'elon-musk',
    name: 'Elon Musk',
    category: '{{CATEGORY_REAL}}',
    SHS: {
      type: 'LSI',
      subtype: ['D', 'C', 'N', 'H'],
      accentuation: ['P'],
    },
    SCS: {},
    profilePicture: '{{IMAGE}}',
  },
]
