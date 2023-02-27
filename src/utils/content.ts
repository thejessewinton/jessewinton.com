import { allIndices, allWritings, type Index, type Writing } from "content";
import dayjs from "dayjs";
import * as R from "remeda";

export const getIndex = () => {
  return {
    data: allIndices.find((doc) => doc.slug === "/") as Index,
    featuredWritings: allWritings.filter((doc) => doc.featured),
  };
};

export const getAllWritings = () => {
  const all = R.groupBy(allWritings, (x) => dayjs(x.date).year());
  const byYear = R.sortBy(Object.entries(all), ([year]) => -year);

  return byYear.map(([year, writings]) => ({
    year,
    posts: R.sortBy(writings, (x) => -dayjs(x.date).unix()),
  }));
};

export const getWriting = ({ slug }: { slug: string }) => {
  return allWritings.find((doc) => doc.slugAsParams === slug) as Writing;
};
