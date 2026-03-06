import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from '../sanity/schemaTypes'

export default defineConfig({
  basePath: '/',
    projectId: 'fco95uzx', // Hardcoded from your .env.local
    dataset: 'production',
  schema,
  plugins: [structureTool()],
})
