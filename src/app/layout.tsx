import { Footer } from 'components/layout/footer/Footer';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import '../styles/globals.css';
import { Header } from 'components/layout/header/Header';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <body className={inter.className}>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
