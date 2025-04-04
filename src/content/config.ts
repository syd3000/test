// 1. Import utilities from astro:content
import { glob } from 'astro/loaders';
import { z, defineCollection} from 'astro:content';

export const collections = { 


    artworks: defineCollection({
        loader: glob({pattern: "**/*.{md,mdx}",
            base: "public/artwork/"
        }),
        schema: z.object({
            title: z.string(),
            year: z.number(),
            description: z.string(),
            size: z.string(),
            count: z.number(),
            selected: z.boolean(),
            priority: z.number().default(30),
        })
    })
};