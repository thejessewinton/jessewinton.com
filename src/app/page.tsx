import { asHTML, asText } from "@prismicio/helpers";
import { Intro } from "components/intro/Intro";
import { getIndex } from "utils/prismic";

export const revalidate = 3600;

const Index = async () => {
  const { data } = await getIndex();

  return (
    <div className="flex flex-col gap-2 pt-32 pb-4">
      <h1 className="group relative inline-block max-w-xs cursor-pointer font-medium">
        <>
          {asText(data.heading)}
          <Intro image={data.image} />
        </>
      </h1>
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: asHTML(data.blurb) }}
      />
    </div>
  );
};

export default Index;
