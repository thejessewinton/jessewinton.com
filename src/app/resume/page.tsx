import type { Metadata } from "next";
import { getResume } from "utils/content";
import { Intro } from "components/intro/Intro";
import { MDX } from "components/mdx/MDX";

export const revalidate = 60;

export const generateMetadata = (): Metadata => {
  const data = getResume();

  return {
    title: data.title,
    description: data.description,
  };
};

const Role = ({
  character,
  show,
  company,
  director,
  award,
}: {
  character: string;
  show: string;
  company: string;
  director: string;
  award: string | undefined;
}) => {
  return (
    <div className="flex min-h-[40px] w-full flex-row justify-between transition-opacity hover:!opacity-100 hover:!blur-none group-hover:opacity-40 group-hover:blur-[2px]">
      <p>
        {character}
        <span className="block text-right text-sm text-neutral-500">
          {award}
        </span>
      </p>
      <p>{show}</p>
      <p className="text-right">
        {company}
        <span className="block text-sm text-neutral-500">Dir. {director}</span>
      </p>
    </div>
  );
};

const Index = async () => {
  const data = getResume();

  return (
    <div className="flex w-full flex-col gap-2 pb-4">
      <div className="flex justify-between">
        <h1 className="group relative inline-block max-w-xs cursor-pointer font-medium">
          <>
            {data.title}
            <Intro />
          </>
        </h1>
      </div>
      <MDX code={data.body.code} />
      {data.shows ? (
        <div className="mt-8 flex flex-col gap-8">
          {data.shows.map((show) => (
            <Role
              key={show.character}
              character={show.character}
              show={show.show}
              company={show.company}
              director={show.director}
              award={show.award}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Index;
