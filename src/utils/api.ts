import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const writingDirectory = join(process.cwd(), "src/content/writing");

export const getAllWriting = () => {
  const slugs = fs.readdirSync(writingDirectory);
  const writing = slugs
    .map((slug) => getDocBySlug(slug))
    .sort((writing1, writing2) =>
      writing1.meta.order - writing2.meta.order > 0 ? 1 : -1
    );
  return writing;
};

export const getDocBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(writingDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
};
