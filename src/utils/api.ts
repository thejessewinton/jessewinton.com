import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const sections = join(process.cwd(), "src/content/sections");
const writing = join(process.cwd(), "src/content/writing");

export const getIndexSectionBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(sections, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
};

export const getAllWriting = () => {
  const slugs = fs.readdirSync(writing);
  const writings = slugs
    .map((slug) => getDocBySlug(slug))
    .sort((writing1, writing2) =>
      writing1.meta.order - writing2.meta.order > 0 ? 1 : -1
    );
  return writings;
};

export const getDocBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(writing, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
};
