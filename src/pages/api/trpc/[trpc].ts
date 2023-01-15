import * as trpcNext from '@trpc/server/adapters/next';
import { createContext } from 'server/trpc/context';
import { appRouter } from 'server/trpc/routers/_app';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
