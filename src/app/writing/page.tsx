import { asText } from "@prismicio/helpers";
import { Hero } from "components/hero/Hero";
import dayjs from "dayjs";
import Link from "next/link";
import type { WritingDocument } from "prismic/generated";
import { getAllWriting } from "utils/prismic";

const Plays = async () => {
  const { results } = await getAllWriting();
  const postsByYear = results.reduce((acc, post) => {
    const year = dayjs(post.first_publication_date).year();
    acc[year] = acc[year] || [];
    acc[year]?.push(post);
    return acc;
  }, {} as { [key: string]: WritingDocument[] });

  const sortedPostsByYear = Object.entries(postsByYear)
    .sort((a, b) => {
      return Number(a[0]) - Number(b[0]);
    })
    .reduce((acc, [year, posts]) => {
      acc[year] = posts;
      return acc;
    }, {} as { [key: string]: WritingDocument[] });

  return (
    <>
      <Hero title="Writing" />
      <div className="group flex flex-col divide-y divide-neutral-700 border-t border-neutral-700">
        {Object.entries(sortedPostsByYear).map(([year, posts]) => {
          return (
            <div className="flex gap-32" key={year}>
              <span className="pt-3 text-sm text-neutral-500">{year}</span>
              <div className="flex-1 divide-y divide-neutral-700">
                {posts.map((post) => (
                  <Link href={`/writing/${post.uid}`} key={post.uid}>
                    <div className="flex flex-1 items-center justify-between py-2 transition-opacity hover:!opacity-100 group-hover:opacity-40">
                      {asText(post.data.title)}
                      <span className="text-sm text-neutral-500">
                        {dayjs(post.first_publication_date).format("MM/DD")}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Plays;
