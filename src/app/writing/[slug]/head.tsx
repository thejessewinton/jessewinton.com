const Head = async ({ params }: { params: { slug: string } }) => {
  return <title>Writing Slug - {params.slug}</title>;
};

export default Head;
