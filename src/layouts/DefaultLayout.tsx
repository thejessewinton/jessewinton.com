import { ReactNode } from 'react';

import { Footer } from 'components/layout/footer/Footer';
import { Header } from 'components/layout/header/Header';

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="px-12">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};
