import { z } from "zod";

export const writingSchema = z.object({
  title: z.string(),
  synopsis: z.string(),
  slug: z.object({
    _type: z.literal("slug"),
    current: z.string(),
  }),
  sample: z.any(),
});

export const writingsSchema = z.array(writingSchema);
