import Link from "next/link";
import { writingsSchema as playsSchema } from "content/schemas/writing";
import { client } from "content/client";
import { Document } from "components/icons/Icons";
import dayjs from "dayjs";
import { Hero } from "components/hero/Hero";

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
        <h2 className="font-serif font-medium italic">{title}</h2>
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
  const loader = await client.fetch(
    `*[_type == "plays"]{title,synopsis,slug,date,"sample": sample.asset->url}`
  );
  const plays = playsSchema.parse(loader);

  return (
    <>
      <Hero title="Plays" />
      <div className="flex flex-col space-y-8 divide-y divide-neutral-700">
        {plays.map((writing) => (
          <PlayCard
            key={writing.title}
            title={writing.title}
            synopsis={writing.synopsis}
            sample={`${writing.sample}?dl=`}
            date={writing.date}
          />
        ))}
      </div>
    </>
  );
};

export default Plays;
