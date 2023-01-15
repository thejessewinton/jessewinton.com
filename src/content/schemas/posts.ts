import { z } from "zod";

export const postSchema = z.object({
  title: z.string(),
  content: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      children: z.array(
        z.object({
          _key: z.string(),
          _type: z.string(),
          marks: z.array(z.string()),
          text: z.string(),
        })
      ),
      markDefs: z.array(z.unknown()),
      style: z.string(),
    })
  ),
  slug: z.object({
    _type: z.literal("slug"),
    current: z.string(),
  }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const postsSchema = z.array(postSchema);
