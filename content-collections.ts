import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'

const index = defineCollection({
  name: 'index',
  directory: 'src/content',
  include: 'index.md',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    works: z.array(
      z.object({
        label: z.string(),
        title: z.string(),
        description: z.string(),
        url: z.string(),
      }),
    ),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      html,
    }
  },
})

const playsIndex = defineCollection({
  name: 'playsIndex',
  directory: 'src/content',
  include: 'plays.md',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      html,
    }
  },
})

const plays = defineCollection({
  name: 'plays',
  directory: 'src/content',
  include: 'plays/**/*.md',
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    synopsis: z.string(),
    url: z.string().optional(),
    completed: z.boolean().optional(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      html,
    }
  },
})

export default defineConfig({
  collections: [index, playsIndex, plays],
})
