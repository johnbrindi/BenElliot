import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/admin',
  projectId: 'fco95uzx', // Copied from studio config
  dataset: 'production',
  schema,
  plugins: [structureTool()],
})
