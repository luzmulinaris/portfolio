import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** A string provided in both site locales. */
const localized = z.object({
  en: z.string(),
  es: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: localized,
    /** Section in the original portfolio. */
    category: z.enum(['editorial', 'packaging', 'social', 'identity', 'other']),
    /** e.g. "University final project | El Gato y La Caja". */
    type: localized,
    /** One-line blurb shown on cards. */
    summary: localized,
    /** Full description shown on the project page. */
    description: localized,
    role: localized,
    year: z.string(),
    client: z.string().optional(),
    /** Public path (without base) to the cover image, e.g. /projects/nacao.webp */
    cover: z.string(),
    coverAlt: localized.optional(),
    gallery: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    accent: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'es']),
    /** Shared id linking the en/es versions of the same post (for hreflang + lang switch). */
    translationKey: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
