import { env } from "env/server.mjs";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
