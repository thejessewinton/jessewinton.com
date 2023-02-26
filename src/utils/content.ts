import { allDocuments, type Index } from "content";

export const getHome = () => {
  return allDocuments.find((doc) => doc.slug === "/") as Index;
};
