import { z } from "zod";

export const postSchema = z.object({
  title: z.string(),
});

export const postsSchema = z.array(postSchema);
