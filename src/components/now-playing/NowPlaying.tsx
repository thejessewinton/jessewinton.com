"use client";

import useSWR, { type Fetcher } from "swr";
import type { NowPlayingResponse } from "utils/spotify";

export const NowPlaying = () => {
  const fetcher: Fetcher<NowPlayingResponse> = (url: string) =>
    fetch(url).then((r) => r.json());

  const { data, isLoading } = useSWR("/spotify", fetcher);

  if (isLoading || !data) return null;

  return <div>{data.item.name}</div>;
};
