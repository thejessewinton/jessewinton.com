import { env } from 'env/server.mjs';

type GetNowPlayingResponse = {
  status: number;
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      images: Array<{ url: string }>;
      artists: Array<{ name: string }>;
    };
    external_urls: {
      spotify: string;
    };
  };
};

const basic = Buffer.from(
  `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`
).toString('base64');

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const refresh_token = env.SPOTIFY_REFRESH_TOKEN as string;

const getAccessToken = async () => {
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
  }).toString();

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  return response.json() as Promise<{ access_token: string }>;
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (await res.json()) as GetNowPlayingResponse;
};
