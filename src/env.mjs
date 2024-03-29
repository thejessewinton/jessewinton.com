import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SPOTIFY_REFRESH_TOKEN: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    NODE_ENV: z.enum(['development', 'test', 'production'])
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url()
  },
  runtimeEnv: {
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV
  }
})
