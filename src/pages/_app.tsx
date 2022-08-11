// src/pages/_app.tsx
import type { AppType } from 'next/dist/shared/lib/utils';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';

import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import { withTRPC } from '@trpc/next';

import { linkResolver, repositoryName } from '../../prismic.config';
import { config } from '../../site.config';

import 'styles/globals.css';

import { Footer } from 'components/layout/footer/Footer';
import { Header } from 'components/layout/header/Header';
import type { AppRouter } from 'server/router';
import superjson from 'superjson';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <div className="px-12">
          <DefaultSeo {...config} />
          <main className="container">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </PrismicPreview>
    </PrismicProvider>
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
