import type { CodegenConfig } from '@graphql-codegen/cli'

const BASE_URL = 'http://parsec.stellarsolutions.md/graphql'

const config: CodegenConfig = {
  schema: BASE_URL,
  documents: ['src/**/*.tsx', 'src/**/*.queries.ts'],

  allowPartialOutputs: false,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config