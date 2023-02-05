const Plays = async ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="flex flex-col">
        {params.slug}
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
