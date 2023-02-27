import dayjs from "dayjs";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllWritings } from "utils/content";

export const metadata: Metadata = {
  title: "Writing",
};

const Writings = () => {
  const writings = getAllWritings();

  return (
    <>
      <div className="flex w-full flex-col divide-y divide-neutral-700 border-t border-neutral-700">
        {writings.map(({ year, posts }) => {
          return (
            <div className="flex gap-32" key={year}>
              <span className="pt-3 text-sm text-neutral-500">{year}</span>
              <div className="group flex-1 divide-y divide-neutral-700">
                {posts.map((post) => (
                  <Link href={post.slug} key={post.slug}>
                    <div className="flex flex-1 items-center justify-between py-2 transition-opacity hover:!opacity-100 hover:!blur-none group-hover:opacity-40 group-hover:blur-xs">
                      {post.title}
                      <span className="text-sm text-neutral-500">
                        {dayjs(post.date).format("MM/DD")}
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

export default Writings;
