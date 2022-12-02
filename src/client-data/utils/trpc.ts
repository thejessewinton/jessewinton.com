import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

import type { AppRouter } from 'server/routers/_app';

const url =
  typeof window !== 'undefined'
    ? '/api/trpc'
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/trpc`
    : 'http://localhost:3001/api/trpc';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url,
        }),
        loggerLink(),
      ],
    };
  },
});
