import { getNowPlaying } from "utils/spotify";

export async function GET() {
  const nowPlaying = await getNowPlaying();
  return new Response(
    JSON.stringify({
      item: {
        name: nowPlaying.item.name,
        artist: nowPlaying.item.album.artists[0]?.name,
      },
      is_playing: nowPlaying.is_playing,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
