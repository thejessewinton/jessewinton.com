import Link from "next/link";
import type { Metadata } from "next";
import { getHome } from "utils/content";
import { Intro } from "components/intro/Intro";
import { MDX } from "components/mdx/MDX";

export const revalidate = 60;

export const generateMetadata = (): Metadata => {
  const data = getHome();

  return {
    title: data.title,
    description: data.description,
  };
};

const WorksCard = ({
  label,
  title,
  description,
  url,
}: {
  label: string;
  title: string;
  description: string;
  url: string | undefined;
}) => {
  return (
    <Link href={url || ""} className="min-h-[90px]">
      <div className="transition-opacity hover:!opacity-100 hover:!blur-none group-hover:opacity-40 group-hover:blur-[2px]">
        <h2 className="mb-4 text-sm text-neutral-500">{label}</h2>
        <div className="gap-6">
          <span>{title}</span>
          <div className="text-neutral-500">{description}</div>
        </div>
      </div>
    </Link>
  );
};

const Index = async () => {
  const data = getHome();

  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="flex justify-between">
        <h1 className="group relative inline-block max-w-xs cursor-pointer font-medium">
          <>
            {data.title}
            <Intro />
          </>
        </h1>
      </div>
      <MDX code={data.body.code} />
      {data.works ? (
        <div className="group mt-8 grid gap-6 md:grid-cols-3">
          {data.works.map((work) => (
            <WorksCard
              key={work.label}
              label={work.label}
              title={work.title}
              description={work.description}
              url={work.url}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Index;
