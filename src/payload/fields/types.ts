import { ArrayField, Field } from 'payload'

import deepMerge from '../utilities/deepMerge'

type TypesSelectField = (options?: { overrides?: Partial<ArrayField> }) => Field

export const typesSelectField: TypesSelectField = ({ overrides = {} } = {}) => {
  const field: Field = {
    name: 'type',
    type: 'select',
    options: [
      {
        label: 'ILE',
        value: 'ILE',
      },
      {
        label: 'LIE',
        value: 'LIE',
      },
      {
        label: 'IEE',
        value: 'IEE',
      },
      {
        label: 'EIE',
        value: 'EIE',
      },
      {
        label: 'SLE',
        value: 'SLE',
      },
      {
        label: 'LSE',
        value: 'LSE',
      },
      {
        label: 'SEE',
        value: 'SEE',
      },
      {
        label: 'ESE',
        value: 'ESE',
      },
      {
        label: 'ILI',
        value: 'ILI',
      },
      {
        label: 'LII',
        value: 'LII',
      },
      {
        label: 'IEI',
        value: 'IEI',
      },
      {
        label: 'EII',
        value: 'EII',
      },
      {
        label: 'SLI',
        value: 'SLI',
      },
      {
        label: 'LSI',
        value: 'LSI',
      },
      {
        label: 'SEI',
        value: 'SEI',
      },
      {
        label: 'ESI',
        value: 'ESI',
      },
    ],
  }

  return deepMerge(field, overrides)
}
