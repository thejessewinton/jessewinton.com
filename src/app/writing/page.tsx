import { Hero } from "components/hero/Hero";
import dayjs from "dayjs";
import Link from "next/link";

const Plays = async () => {
  // const postsByYear = posts.reduce((acc, post) => {
  //   const year = dayjs(post.date).year();
  //   acc[year] = acc[year] || [];
  //   acc[year]?.push(post);
  //   return acc;
  // }, {} as { [key: string]: typeof posts });

  // // take posts by year and sort it so that the biggest year is first
  // const sortedPostsByYear = Object.entries(postsByYear)
  //   .sort((a, b) => {
  //     return Number(a[0]) - Number(b[0]);
  //   })
  //   .reduce((acc, [year, posts]) => {
  //     acc[year] = posts;
  //     return acc;
  //   }, {} as { [key: string]: typeof posts });

  return (
    <>
      <Hero title="Writing" />
      <div className="group flex flex-col divide-y divide-neutral-700 border-t border-neutral-700">
        {/* {Object.entries(sortedPostsByYear).map(([year, posts]) => {
          return (
            <div className="flex gap-32" key={year}>
              <span className="pt-3 text-sm text-neutral-500">{year}</span>
              <div className="flex-1 divide-y divide-neutral-700">
                {posts.map((post) => (
                  <Link
                    href={`/writing/${post.slug.current}`}
                    key={post.slug.current}
                  >
                    <div className="flex flex-1 items-center justify-between py-2 transition-opacity hover:!opacity-100 group-hover:opacity-40">
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
        })} */}
      </div>
    </>
  );
};

export default Plays;
