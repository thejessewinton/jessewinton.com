import { PortableText } from "@portabletext/react";
import { client } from "content/client";
import { introSchema } from "content/schemas/sections";

const Index = async () => {
  const loader = await client.fetch(`*[_type == "intro"][0]{heading,blurb}`);
  const intro = introSchema.parse(loader);

  return (
    <>
      <div className="flex flex-col gap-2 pt-32 pb-4">
        <h1 className="font-medium">{intro.heading}</h1>
        <div className="mt-8">
          <PortableText value={intro.blurb} />
        </div>
      </div>
    </>
  );
};

export default Index;
