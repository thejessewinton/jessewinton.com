// src/pages/_app.tsx
import type { AppType } from 'next/dist/shared/lib/utils';
import { DefaultSeo } from 'next-seo';

import { withTRPC } from '@trpc/next';

import { config } from '../../site.config';

import 'styles/globals.css';

import { DefaultLayout } from 'layouts/DefaultLayout';
import type { AppRouter } from 'server/router';
import superjson from 'superjson';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <DefaultLayout>
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.browser) return ''; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
    };
  },
  ssr: false,
})(App);
