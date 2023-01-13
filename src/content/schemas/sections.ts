import { z } from "zod";

export const introSchema = z.object({
  heading: z.string(),
  blurb: z.array(
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
});
