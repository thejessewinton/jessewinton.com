import { Inter, Newsreader } from "@next/font/google";
import { Footer } from "components/layout/footer/Footer";
import type { ReactNode } from "react";

import "styles/globals.css";

const inter = Inter({ variable: "--font-inter", display: "optional" });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  display: "optional",
  style: "italic",
});

const links = [
  {
    label: "Instagram",
    href: "https://instagram.com/thejessewinton",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/thejessewinton",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/thejessewinton",
  },
];

export type Links = typeof links;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="scroll-smooth leading-loose antialiased dark:bg-neutral-900 dark:text-neutral-200">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-1 flex-col px-8 pt-48">
          {children}
        </main>
        <Footer links={links} />
      </body>
    </html>
  );
}
