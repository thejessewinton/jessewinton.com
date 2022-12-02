import { env } from 'env/server.mjs';
import { SpotifyWebApi } from 'spotify-web-api-ts';

export const spotifyApi = new SpotifyWebApi({
  clientId: env.SPOTIFY_CLIENT_ID,
  clientSecret: env.SPOTIFY_CLIENT_SECRET,
});

export const authorize = async () => {
  const { access_token } = await spotifyApi.getRefreshedAccessToken(
    env.SPOTIFY_REFRESH_TOKEN
  );
  spotifyApi.setAccessToken(access_token);

  console.log('Spotify access token refreshed', access_token);

  return access_token;
};

export const getMyCurrentPlayingTrack = async () => {
  await authorize();

  const response = await spotifyApi.player.getCurrentlyPlayingTrack();

  return response;
};
