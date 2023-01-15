import { client } from "content/client";
import { postSchema } from "content/schemas/posts";

const Head = async ({ params }: { params: { slug: string } }) => {
  const loader = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    {
      slug: params.slug,
    }
  );
  const post = postSchema.parse(loader);

  return <title>{post.title}</title>;
};

export default Head;
