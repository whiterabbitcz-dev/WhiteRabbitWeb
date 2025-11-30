import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  work: workCollection,
};


