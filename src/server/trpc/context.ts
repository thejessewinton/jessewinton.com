// src/server/router/context.ts
import type { inferAsyncReturnType } from "@trpc/server";
import type * as trpcNext from "@trpc/server/adapters/next";

export const createContext = (opts?: trpcNext.CreateNextContextOptions) => {
  const req = opts?.req;
  const res = opts?.res;

  return {
    req,
    res,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
