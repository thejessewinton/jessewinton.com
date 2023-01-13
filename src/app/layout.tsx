import { Inter, Newsreader } from "@next/font/google";
import { Footer } from "components/layout/footer/Footer";

import "styles/globals.css";

const inter = Inter({ variable: "--font-inter" });
const newsreader = Newsreader({
  variable: "--font-newsreader",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="scroll-smooth font-sans leading-loose dark:bg-neutral-900 dark:text-neutral-200">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-1 flex-col px-8 pt-16">
          {children}
        </main>
        <Footer links={links} />
      </body>
    </html>
  );
}
