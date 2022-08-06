export const config = {
  siteTitle: 'Jesse Winton',
  titleTemplate: '%s - Jesse Winton',
  defaultTitle: 'Jesse Winton',
  siteUrl: process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : `http://localhost:${process.env.PORT ?? 3000}`,
  description:
    'VeroSkills is your 24/7 direct line to live tutors, free software engineering courses, and top-notch jobs.',
  twitter: {
    cardType: 'summary',
    site: '@veroskills',
    creator: '@veroskills',
  },
};
