import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Carousel } from 'components/carousel/Carousel';
import { MotionText } from 'components/motion-text/MotionText';

const Index: NextPage = () => {
  return (
    <>
      <NextSeo title="Actor x Writer" />

      <div className="flex w-full items-center justify-between">
        <MotionText as="h1" className="uppercase" delay={0.025}>
          Actor
        </MotionText>

        <MotionText as="h1" className="uppercase" delay={0.05}>
          Writer
        </MotionText>

        <MotionText as="h1" className="uppercase" delay={0.075}>
          Musician
        </MotionText>
      </div>
      <Carousel />
    </>
  );
};

export default Index;
