import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { trpc } from 'client-data/utils/trpc';
import { MotionText } from 'components/motion-text/MotionText';

const Index: NextPage = () => {
  const spotify = trpc.useQuery(['spotify.get-current-track']);

  return (
    <>
      <NextSeo title="Actor x Writer" />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <MotionText as="h1" className="uppercase">
          Actor
        </MotionText>
        <MotionText as="h1" className="uppercase">
          Writer
        </MotionText>
        <MotionText as="h1" className="uppercase">
          Musician
        </MotionText>
        {JSON.stringify(spotify.data, null, 4)}
      </main>
    </>
  );
};

export default Index;
