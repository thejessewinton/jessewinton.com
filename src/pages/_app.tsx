// src/pages/_app.tsx
import { Manrope } from "@next/font/google";

import "styles/globals.css";

import type { AppType } from "next/app";
import { clsx } from "clsx";
import { trpc } from "utils/trpc";

const manrope = Manrope({ subsets: ["latin"] });

const App: AppType = ({ Component, pageProps }) => {
  return (
    <main className={clsx("container flex flex-1 flex-col", manrope.className)}>
      <Component {...pageProps} />
    </main>
  );
};

export default trpc.withTRPC(App);
