import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // 160文字以上のテキストも受け入れられるよう変更
      role: z.string(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image(),
      url: z.string().optional(), // z.url() から z.string() に変更（/enbody/ を許可）
      repo: z.string().optional(), // z.url() から z.string() に変更
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
