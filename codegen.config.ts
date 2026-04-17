import type { CodegenConfig } from '@graphql-codegen/cli'
import { config as loadEnv } from 'dotenv'

loadEnv({ path: '.env.local' })

const BASE_URL = process.env.API_URL as string

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