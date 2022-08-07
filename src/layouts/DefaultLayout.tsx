import { ReactNode } from 'react';

import { Footer } from 'components/footer/Footer';

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex w-full flex-grow items-center">{children}</div>
        <Footer />
      </main>
    </>
  );
};
