import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Bio } from 'components/sections/bio/Bio';
import { CallToAction } from 'components/sections/call-to-action/CallToAction';

const Index: NextPage = () => {
  return (
    <>
      <NextSeo title="Actor x Writer" />
      <Bio />
      <CallToAction />
    </>
  );
};

export default Index;
