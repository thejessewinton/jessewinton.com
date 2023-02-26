import Link from "next/link";
import { Document } from "components/icons/Icons";
import dayjs from "dayjs";
import { Hero } from "components/hero/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plays",
};

const PlayCard = ({
  title,
  synopsis,
  sample,
  date,
}: {
  title: string;
  synopsis: string;
  sample: string | null;
  date: string | null | undefined;
}) => {
  return (
    <div className="pt-8">
      <div className="flex justify-between">
        <h2 className="!font-serif text-lg font-medium italic">{title}</h2>
      </div>
      <div className="mt-4 mb-6 leading-loose">{synopsis}</div>
      <div className="flex justify-between">
        {sample ? (
          <Link
            href={sample}
            target="_blank"
            className="group flex items-center gap-1 underline decoration-neutral-400 underline-offset-2 transition-colors  hover:decoration-neutral-500"
          >
            Read Sample
            <Document />
          </Link>
        ) : null}
        {date ? <em>{dayjs(date).format("YYYY")}</em> : null}
      </div>
    </div>
  );
};

const Plays = async () => {
  return (
    <>
      <Hero title="Plays" />
      <div className="flex flex-col space-y-8 divide-y divide-neutral-700"></div>
    </>
  );
};

export default Plays;
