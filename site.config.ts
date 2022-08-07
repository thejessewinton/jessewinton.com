export const config = {
  siteTitle: 'Jesse Winton',
  titleTemplate: '%s — Jesse Winton',
  defaultTitle: 'Jesse Winton',
  siteUrl: process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : `http://localhost:${process.env.PORT ?? 3000}`,
  description: 'actor x writer x playwright',
  twitter: {
    cardType: 'summary',
    site: '@thejessewinton',
    creator: '@thejessewinton',
  },
};
