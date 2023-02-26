import { allDocuments, type Index, type Resume } from "content";

export const getHome = () => {
  return allDocuments.find((doc) => doc.slug === "/") as Index;
};

export const getResume = () => {
  return allDocuments.find((doc) => doc.slug === "/resume") as Resume;
};
