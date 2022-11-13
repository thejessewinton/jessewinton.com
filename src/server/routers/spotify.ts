import { getNowPlaying } from 'client-data/lib/spotify';
import { publicProcedure, router } from 'server/trpc';

export const spotifyRouter = router({
  getNowPlaying: publicProcedure.query(async () => {
    try {
      const response = await getNowPlaying();

      return {
        track: {
          isPlaying: response.is_playing,
          title: response.item.name,
          album: response.item.album.name,
          artist: response.item.album.artists
            .map((artist: { name: string }) => artist.name)
            .join(', '),
          albumImageUrl: response.item.album.images[0]?.url,
          songUrl: response.item.external_urls.spotify,
        },
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  }),
});
