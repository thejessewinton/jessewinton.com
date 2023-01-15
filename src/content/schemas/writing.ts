import { z } from "zod";

export const writingSchema = z.object({
  title: z.string(),
  synopsis: z.string(),
  sample: z.string().nullable(),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .nullable(),
});

export const writingsSchema = z.array(writingSchema);
