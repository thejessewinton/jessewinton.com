import { PortableText } from "@portabletext/react";
import { client } from "content/client";
import { postSchema } from "content/schemas/posts";
import dayjs from "dayjs";

const Plays = async ({ params }: { params: { slug: string } }) => {
  const loader = await client.fetch<typeof postSchema>(
    `*[_type == "post" && slug.current == $slug][0]`,
    {
      slug: params.slug,
    }
  );
  const post = postSchema.parse(loader);

  return (
    <>
      <div className="flex flex-col">
        {post.title}
        <span className="text-neutral-500">
          {dayjs(post.date).format("MM/DD/YY")}
        </span>

        <div className="mt-10">
          <PortableText value={post.content} />
        </div>
      </div>
    </>
  );
};

export default Plays;
