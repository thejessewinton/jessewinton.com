// src/pages/_app.tsx
import type { AppType } from 'next/dist/shared/lib/utils';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';

import { Inter } from '@next/font/google';
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';

import { linkResolver, repositoryName } from '../../prismic.config';
import { config } from '../../site.config';

import 'styles/globals.css';

import { trpc } from 'client-data/utils/trpc';
import { Footer } from 'components/layout/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

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
        <div className="px-4 lg:px-12">
          <DefaultSeo {...config} />
          <main className={`container ${inter.className}`}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </PrismicPreview>
    </PrismicProvider>
  );
};

export default trpc.withTRPC(App);
