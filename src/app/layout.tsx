import { Inter, Newsreader } from "@next/font/google";
import { Footer } from "components/layout/footer/Footer";
import { client } from "content/client";
import { settingsSchema } from "content/schemas/settings";
import type { ReactNode } from "react";

import "styles/globals.css";

const inter = Inter({ variable: "--font-inter", display: "optional" });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  display: "optional",
  style: "italic",
});

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const loader = await client.fetch(`*[_type == "settings"][0]{socials}`);
  const settings = settingsSchema.parse(loader);

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <body className="flex min-h-screen flex-col scroll-smooth leading-loose antialiased selection:bg-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
        <main className="mx-auto flex w-full max-w-3xl flex-grow flex-col px-8 pt-24 lg:pt-48">
          {children}
        </main>
        <Footer links={settings.socials} />
      </body>
    </html>
  );
};

export default RootLayout;
