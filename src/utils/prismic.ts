import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/client.mjs";

const endpoint = getRepositoryEndpoint(env.NEXT_PUBLIC_PRISMIC_REPO_NAME);

export const client = createClient(endpoint);

export const getSiteSettings = async () => {
  return await client.getSingle("site_settings");
};

export const getIndex = async () => {
  return await client.getSingle("index");
};

export const getAllWriting = async () => {
  return await client.getByType("writing", {
    orderings: {
      field: "document.first_publication_date",
      order: "desc",
    },
  });
};
