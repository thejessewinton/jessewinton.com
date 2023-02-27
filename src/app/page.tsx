import Link from "next/link";
import type { Metadata } from "next";
import { getHome } from "utils/content";
import { Intro } from "components/intro/Intro";

export const generateMetadata = (): Metadata => {
  const data = getHome();

  return {
    title: data.title,
    description: data.description,
  };
};

const Index = async () => {
  const data = getHome();

  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="relative z-50 animate-enter">
        <h1 className="group relative mb-4 inline-block w-full max-w-xs cursor-pointer font-medium">
          <>
            {data.title}
            <Intro />
          </>
        </h1>

        <div
          className="font-light"
          dangerouslySetInnerHTML={{ __html: data.body.html }}
        />
      </div>

      {data.works ? (
        <div className="group relative mt-8 mb-12 grid animate-enter gap-6 animation-delay-300 md:grid-cols-3">
          {data.works.map((work) => (
            <Link
              key={work.label}
              href={work.url || ""}
              className="relative min-h-[90px] font-light"
            >
              <div className="transition-opacity duration-500 hover:!opacity-100 hover:!blur-none group-hover:opacity-40 group-hover:blur-xs">
                <h2 className="mb-4 text-sm text-neutral-400">{work.label}</h2>
                <div className="gap-6">
                  <span>{work.title}</span>
                  <div className="text-neutral-400">{work.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Index;
