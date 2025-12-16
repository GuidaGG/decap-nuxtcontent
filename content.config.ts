import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        tagline: z.string().optional(),
        buttonText: z.string().optional(),
        buttonLink: z.string().optional(),
        date: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        sections: z.array(z.object({
          type: z.enum(['hero', 'text', 'gallery']),
          heading: z.string().optional(),
          subheading: z.string().optional(),
          image: z.string().optional(),
          content: z.string().optional(),
          images: z.array(z.string()).optional(),
        })).optional(),
      })
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',  // Match .md files in /content/projects/
      schema: z.object({
        tagline: z.string().optional(),
        buttonText: z.string().optional(),
        buttonLink: z.string().optional(),
        date: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        sections: z.array(z.object({
          type: z.enum(['hero', 'text', 'gallery']),
          heading: z.string().optional(),
          subheading: z.string().optional(),
          image: z.string().optional(),
          content: z.string().optional(),
          images: z.array(z.string()).optional(),
        })).optional(),
      })
    }),
  },
})