import type { Metadata } from "next";

interface PlaysParams {
  params: { slug: string };
}

export const generateMetadata = async ({
  params,
}: PlaysParams): Promise<Metadata> => {
  return { title: "Plays" };
};
const Plays = async ({ params }: PlaysParams) => {
  return (
    <>
      <div className="flex flex-col">
        {/* {post.title}
        <span className="text-neutral-500">
          {dayjs(post.date).format("MM/DD/YY")}
        </span>

        <div className="mt-10">

        </div> */}
      </div>
    </>
  );
};

export default Plays;
