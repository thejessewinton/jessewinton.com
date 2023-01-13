import { client } from "content/client";
import { Hero } from "components/hero/Hero";
import { postsSchema } from "content/schemas/posts";
import dayjs from "dayjs";

const Plays = async () => {
  const loader = await client.fetch(
    `*[_type == "post"]{title,slug,date,content}`
  );
  const posts = postsSchema.parse(loader);

  const postsByYear = posts.reduce((acc, post) => {
    const year = dayjs(post.date).year();
    acc[year] = acc[year] || [];
    acc[year]?.push(post);
    return acc;
  }, {} as { [key: string]: typeof posts });

  // take posts by year and sort it so that the biggest year is first
  const sortedPostsByYear = Object.entries(postsByYear)
    .sort((a, b) => {
      return Number(a[0]) - Number(b[0]);
    })
    .reduce((acc, [year, posts]) => {
      acc[year] = posts;
      return acc;
    }, {} as { [key: string]: typeof posts });

  return (
    <>
      <Hero title="Writing" />
      <div className="flex flex-col divide-y divide-neutral-700 border-t border-neutral-700">
        {Object.entries(sortedPostsByYear).map(([year, posts]) => {
          return (
            <div className="flex gap-32" key={year}>
              <span className="pt-4 text-sm text-neutral-500">{year}</span>
              <div className="flex-1 divide-y divide-neutral-700">
                {posts.map((post) => (
                  <div
                    key={post.title}
                    className="flex flex-1 items-center justify-between py-3"
                  >
                    {post.title}
                    <span className="text-sm text-neutral-500">
                      {dayjs(post.date).format("MM/DD")}
                    </span>
                  </div>
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
