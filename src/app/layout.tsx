import { Inter, Newsreader } from "next/font/google";
import { AnalyticsWrapper } from "components/analytics-wrapper/AnalyticsWrapper";
import { Footer } from "components/footer/Footer";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "styles/globals.css";
import { Blur } from "components/blur/Blur";

const inter = Inter({
  variable: "--font-sans",
  display: "optional",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  display: "optional",
  style: "italic",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Jesse Winton",
    template: "%s — Jesse Winton",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex min-h-screen flex-col items-center justify-center scroll-smooth leading-loose text-neutral-900 antialiased selection:bg-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
        <Blur />
        <main className="mx-auto mt-32 flex w-full max-w-3xl flex-grow flex-col items-center justify-center px-8">
          {children}
        </main>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
