import { Header } from "components/layout/header/Header";
import type { InferGetStaticPropsType, NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import { getAllWriting, getDocBySlug, getIndexSectionBySlug } from "utils/api";

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const WritingCard = ({
  title,
  synopsis,
  sample,
  year,
  in_progress,
}: {
  title: string;
  synopsis: string;
  in_progress: boolean;
  year: string;
  sample?: string;
}) => {
  return (
    <div className="overflow-hidden rounded-md p-6 dark:bg-neutral-900">
      <div className="flex justify-between">
        <h2 className="text-sm font-medium text-white">{title}</h2>
        {in_progress ? (
          <span className="flex items-center rounded-full bg-primary px-2 text-[10px] text-neutral-500">
            In Progress
          </span>
        ) : (
          <span className="flex items-center rounded-full border bg-neutral-200 px-2 text-[10px] text-neutral-900">
            {year}
          </span>
        )}
      </div>
      <div className="mt-4 mb-6 text-xs leading-loose">{synopsis}</div>
      {sample ? (
        <Link
          href={sample}
          target="_blank"
          className="group flex items-center gap-1 text-xs transition-colors hover:text-white"
        >
          Read sample
          <span className="opacity-0 transition-opacity group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </Link>
      ) : null}
    </div>
  );
};

const Index: NextPage<IndexPageProps> = ({ intro }) => {
  return (
    <>
      <Head>
        <title>Jesse Winton</title>
      </Head>
      <Header />
      <div className="flex flex-col">
        <div className="py-6">
          <h3 className="text-white lg:text-2xl">{intro.meta.heading}</h3>
          <p>{intro.meta.blurb}</p>
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const intro = getIndexSectionBySlug("intro");

  return {
    props: {
      intro,
    },
  };
};
