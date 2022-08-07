import { createRouter } from './context';

import { getNowPlaying } from 'client-data/lib/spotify';

export const spotifyRouter = createRouter().query('get-current-track', {
  resolve: async () => {
    try {
      const response = await getNowPlaying();

      if (response.status === 204 || response.status > 400) {
        return {
          isPlaying: false,
          success: false,
        };
      }

      return {
        track: {
          isPlaying: response.is_playing,
          title: response.item.name,
          album: response.item.album.name,
          artist: response.item.album.artists
            .map((artist: { name: string }) => artist.name)
            .join(', '),
          albumImageUrl: response.item.album.images[0].url,
          songUrl: response.item.external_urls.spotify,
        },
        success: true,
      };
    } catch (error) {
      return {
        error,
        success: false,
      };
    }
  },
});
