import { z } from "zod";

export const settingsSchema = z.object({
  socials: z.array(
    z.object({
      _key: z.string(),
      _type: z.literal("social"),
      label: z.string(),
      link: z.string(),
    })
  ),
});

export type SettingsType = z.infer<typeof settingsSchema>;
