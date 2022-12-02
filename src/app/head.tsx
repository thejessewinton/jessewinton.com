import { env } from 'env/server.mjs';

const Head = () => {
  const title = 'Actor x Writer — Jesse Winton';
  const description = 'actor x writer x playwright';
  const image = `${env.ROOT_URL}/og-image.webp`;

  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={env.ROOT_URL} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={env.ROOT_URL} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default Head;
